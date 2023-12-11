import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Modal, Spin } from "antd";
import styled from "@emotion/styled";

import { CustomForm } from "@/components/ui/form";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import {
  MUTATE_NEEDS_API_URL,
  NEED_DETAIL_API_URL,
  TERMINATE_NEEDS_API_URL,
} from "@/constants/apiUrls";
import {
  DealScaleField,
  IndustryField,
  KeyConditionField,
  RevenueField,
  SalesField,
} from "@/components/ui/fields/Fields";
import { zodNeedsAdd } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { returnNull } from "@/util/ModifyData";

const DeleteButton = styled(Button)(() => ({
  width: "fit-content",
  alignSelf: "flex-start",
}));

const AddNeed = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { needsKey } = useParams();

  const [confirmModal, setConfirmModal] = useState({
    complete: false,
    tempo: false,
    delete: false,
    terminate: false,
  });

  const getNeedDetail = useCallback(async () => {
    const { status, data } = await Interceptor?.get(
      `${NEED_DETAIL_API_URL}/${needsKey}`
    );

    if (status === 200) {
      return data.data;
    }
  }, [needsKey]);

  const { data: needDetail, isLoading } = useQuery(
    ["needDetail", needsKey],
    getNeedDetail,
    {
      enabled: !!needsKey,
    }
  );

  const { control, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(zodNeedsAdd),
    mode: "onSubmit",
    defaultValues: {
      industry: "",
      deal_scale: "",
      sales: "",
      revenue: "",
      key_condition: "",
    },
  });

  useEffect(() => {
    if (needDetail) {
      setValue("industry", needDetail?.industry);
      setValue("deal_scale", needDetail?.deal_scale);
      setValue("sales", needDetail?.sales);
      setValue("revenue", needDetail?.revenue);
      setValue("key_condition", needDetail?.key_condition);
    }
  }, [needDetail, setValue]);

  const statusNm = useMemo(() => {
    switch (needDetail?.status) {
      case "0":
        return "작성중";

      case "1":
        return "작성 완료";

      case "2":
        return "탐색중";

      case "3":
        return "탐색 완료";

      case "4":
        return "종료";

      default:
        return "생성";
    }
  }, [needDetail?.status]);

  const { mutate: editNeedsFunction } = useMutation(
    (data) =>
      // 니즈 수정하기 (완료)
      Interceptor.patch(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: true,
        sales: returnNull(data?.sales),
        revenue: returnNull(data?.revenue),
        needs_key: needsKey,
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need", { state: { mutateStatus: "edit" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: tempoEditNeedsFunction } = useMutation(
    (data) =>
      // 니즈 수정하기 (임시 저장)
      Interceptor.patch(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: false,
        sales: returnNull(data?.sales),
        revenue: returnNull(data?.revenue),
        needs_key: needsKey,
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need", { state: { mutateStatus: "edit" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: addNeedsFunction } = useMutation(
    (data) =>
      // 니즈 생성하기 (완료)
      Interceptor.post(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: true,
        sales: returnNull(data?.sales),
        revenue: returnNull(data?.revenue),
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need/add-complete");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: tempoAddNeedsFunction } = useMutation(
    (data) =>
      // 니즈 임시저장하기
      Interceptor.post(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: false,
        sales: returnNull(data?.sales),
        revenue: returnNull(data?.revenue),
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need", { state: { mutateStatus: "tempo" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: deleteNeedsFunction } = useMutation(
    (data) =>
      // 니즈 삭제하기
      Interceptor.delete(MUTATE_NEEDS_API_URL, {
        data: { needs_key: needsKey },
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need", { state: { mutateStatus: "delete" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: terminateNeedsFunction } = useMutation(
    (data) =>
      // 니즈 종료하기
      Interceptor.patch(TERMINATE_NEEDS_API_URL, { needs_key: needsKey }),
    {
      onSuccess: () => {
        queryClient.removeQueries("needList");

        navigate("/need", { state: { mutateStatus: "terminate" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const joinSubmit = useCallback(() => {
    setConfirmModal({
      complete: true,
      tempo: false,
    });
  }, []);

  const tempoAdd = useCallback(() => {
    setConfirmModal({
      complete: false,
      tempo: true,
    });
  }, []);

  const deleteConfirm = useCallback(() => {
    setConfirmModal((prev) => ({
      ...prev,
      delete: true,
    }));
  }, []);

  const terminateConfirm = useCallback(() => {
    setConfirmModal((prev) => ({
      ...prev,
      terminate: true,
    }));
  }, []);

  const doneComplete = useCallback(() => {
    if (needsKey) {
      editNeedsFunction(watch());

      return;
    }

    addNeedsFunction(watch());
  }, [addNeedsFunction, editNeedsFunction, needsKey, watch]);

  const doneTempo = useCallback(() => {
    if (needsKey) {
      tempoEditNeedsFunction(watch());

      return;
    }

    tempoAddNeedsFunction(watch());
  }, [needsKey, tempoAddNeedsFunction, tempoEditNeedsFunction, watch]);

  const handleCancel = () => {
    setConfirmModal({
      complete: false,
      tempo: false,
      delete: false,
      terminate: false,
    });
  };

  return (
    <CustomForm submitEvent={handleSubmit(joinSubmit)}>
      <Modal
        title={`인수 니즈 ${needsKey ? "수정" : "생성"}`}
        open={confirmModal.complete}
        onOk={doneComplete}
        onCancel={handleCancel}
        okText={needsKey ? "수정" : "생성"}
        cancelText="취소"
      >
        인수 니즈를 {needsKey ? "수정" : "생성"}하시겠습니까?
      </Modal>

      <Modal
        title="인수 니즈 임시저장"
        open={confirmModal.tempo}
        onOk={doneTempo}
        onCancel={handleCancel}
        okText="임시저장"
        cancelText="취소"
      >
        인수 니즈를 임시로 저장하시겠습니까?
      </Modal>

      <Modal
        title="인수 니즈 삭제"
        open={confirmModal.delete}
        onOk={deleteNeedsFunction}
        onCancel={handleCancel}
        okText="삭제"
        cancelText="취소"
      >
        인수 니즈를 삭제하시겠습니까?
      </Modal>

      <Modal
        title="인수 니즈 종료"
        open={confirmModal.terminate}
        onOk={terminateNeedsFunction}
        onCancel={handleCancel}
        okText="종료"
        cancelText="취소"
      >
        인수 니즈를 종료하시겠습니까?
      </Modal>

      <FormTitle>
        인수 니즈
        <p>{needDetail?.status_nm}</p>
      </FormTitle>

      <DeleteButton type="dashed" danger size="small" onClick={deleteConfirm}>
        삭제
      </DeleteButton>

      {isLoading ? (
        <Spin />
      ) : (
        <FieldGroup>
          <IndustryField name="industry" control={control} maxLength={200} />

          <DealScaleField name="deal_scale" control={control} />

          <SalesField control={control} />

          <RevenueField control={control} />

          <KeyConditionField control={control} maxLength={700} />
        </FieldGroup>
      )}

      <Flex gap="small">
        {(statusNm === "작성중" || !needsKey) && (
          <>
            <SecondaryButton fullwidth clickEvent={tempoAdd}>
              임시저장
            </SecondaryButton>

            <PrimaryButton fullwidth buttonType="submit">
              생성하기
            </PrimaryButton>
          </>
        )}

        {(statusNm === "작성 완료" ||
          statusNm === "탐색중" ||
          statusNm === "탐색 완료") && (
          <>
            <SecondaryButton fullwidth clickEvent={terminateConfirm}>
              종료하기
            </SecondaryButton>

            {statusNm === "탐색중" || statusNm === "탐색 완료" ? null : (
              <PrimaryButton fullwidth buttonType="submit">
                수정하기
              </PrimaryButton>
            )}
          </>
        )}
      </Flex>
    </CustomForm>
  );
};

export default AddNeed;
