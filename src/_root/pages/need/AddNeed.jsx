import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Spin } from "antd";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { CustomForm } from "@/components/ui/form";
import { FieldGroup } from "@/components/ui/form/CustomForm";
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
import { ModalContainer, NeedExampleModal } from "@/components/ui/modal";
import {
  ModalContents,
  ModalDescription,
} from "@/components/ui/modal/TermModal";
import { zodNeedsAdd } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { addComma, returnNull } from "@/util/ModifyData";
import {
  AddLongText,
  AddText,
  DeleteLongText,
  DeleteText,
  EditLongText,
  EditText,
  NeedsAddEditQuestionText,
  NeedsAddModalTitleText,
  NeedsDeleteQuestionText,
  NeedsDeleteWarningText,
  NeedsRequestText,
  NeedsTempoQuestionText,
  NeedsTempoText,
  NeedsTerminateQuestionText,
  NeedsTerminateText,
  ShowExampleText,
  TempoAddText,
  TerminateLongText,
  TerminateText,
  WritingText,
} from "@/util/language-setting/texts/TranslatedTexts";

const LinkText = styled.button(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const FormTitle = styled(Flex)(() => ({
  fontSize: "2.2rem",
  marginBottom: "2rem",
}));

const StatusName = styled.span(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.color.secondary,
}));

const ExampleButton = styled.button(({ theme }) => ({
  padding: "0.6rem 1.2rem",
  background: theme.color.exampleButton,
  color: "white",
  fontSize: "1.4rem",
}));

const AddNeed = () => {
  const [exampleModalOpen, setExampleModalOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
      `${NEED_DETAIL_API_URL}/${needsKey}`,
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
    },
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
      setValue("deal_scale", addComma(needDetail?.deal_scale));
      setValue("sales", addComma(needDetail?.sales));
      setValue("revenue", addComma(needDetail?.revenue));
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

  const isReadOnly = useMemo(() => {
    switch (needDetail?.status) {
      case "0":
        return false;

      case "1":
        return false;

      case "2":
        return true;

      case "3":
        return true;

      case "4":
        return true;

      default:
        return false;
    }
  }, [needDetail?.status]);

  const { mutate: editNeedsFunction } = useMutation(
    (data) =>
      // 니즈 수정하기 (완료)
      Interceptor.patch(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: true,
        deal_scale: returnNull(data?.sales),
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
    },
  );

  const { mutate: tempoEditNeedsFunction } = useMutation(
    (data) =>
      // 니즈 수정하기 (임시 저장)
      Interceptor.patch(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: false,
        deal_scale: returnNull(data?.deal_scale),
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
    },
  );

  const { mutate: addNeedsFunction } = useMutation(
    (data) =>
      // 니즈 생성하기 (완료)
      Interceptor.post(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: true,
        deal_scale: returnNull(data?.deal_scale),
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
    },
  );

  const { mutate: tempoAddNeedsFunction } = useMutation(
    (data) =>
      // 니즈 임시저장하기
      Interceptor.post(MUTATE_NEEDS_API_URL, {
        ...data,
        complete: false,
        deal_scale: returnNull(data?.deal_scale),
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
    },
  );

  const { mutate: deleteNeedsFunction } = useMutation(
    () =>
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
    },
  );

  const { mutate: terminateNeedsFunction } = useMutation(
    () =>
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
    },
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
    setConfirmModal({ delete: true });
  }, []);

  const terminateConfirm = useCallback(() => {
    setConfirmModal({ terminate: true });
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

  const showExampleModal = () => {
    setExampleModalOpen(true);
  };

  const okExampleModal = () => {
    setExampleModalOpen(false);
  };

  const closeExampleModal = () => {
    setExampleModalOpen(false);
  };

  return (
    <CustomForm wide submitEvent={handleSubmit(joinSubmit)} noLogo>
      <NeedExampleModal
        open={exampleModalOpen}
        onOk={okExampleModal}
        onCancel={closeExampleModal}
      />

      <ModalContainer
        title={
          <NeedsAddModalTitleText
            text={needsKey ? <EditText /> : <AddText />}
          />
        }
        open={confirmModal.complete}
        onOk={doneComplete}
        onCancel={handleCancel}
        okText={needsKey ? <EditText /> : <AddText />}
      >
        <NeedsAddEditQuestionText
          text={needsKey ? <EditText /> : <AddText />}
        />
      </ModalContainer>

      <ModalContainer
        title={<NeedsTempoText />}
        open={confirmModal.tempo}
        onOk={doneTempo}
        onCancel={handleCancel}
        okText={<TempoAddText />}
      >
        <NeedsTempoQuestionText />
      </ModalContainer>

      <ModalContainer
        title={<DeleteLongText />}
        open={confirmModal.delete}
        onOk={deleteNeedsFunction}
        onCancel={handleCancel}
        okText={<DeleteText />}
      >
        <ModalDescription>
          <NeedsDeleteQuestionText />
        </ModalDescription>

        <ModalContents>
          <NeedsDeleteWarningText />
        </ModalContents>
      </ModalContainer>

      <ModalContainer
        title={<NeedsTerminateText />}
        open={confirmModal.terminate}
        onOk={terminateNeedsFunction}
        onCancel={handleCancel}
        okText={<TerminateText />}
      >
        <NeedsTerminateQuestionText />
      </ModalContainer>

      <FormTitle align="center" justify="space-between">
        <Flex
          align={isDesktop ? "center" : "flex-start"}
          gap={isDesktop ? "large" : "small"}
          vertical={!isDesktop}
        >
          <p>
            <NeedsRequestText />
          </p>

          <StatusName>
            {needDetail ? needDetail?.status_nm : <WritingText />}
          </StatusName>
        </Flex>

        {(statusNm === "생성" ||
          statusNm === "작성중" ||
          statusNm === "작성 완료") && (
          <ExampleButton type="button" onClick={showExampleModal}>
            <ShowExampleText />
          </ExampleButton>
        )}
      </FormTitle>

      {isLoading ? (
        <Spin />
      ) : (
        <FieldGroup>
          <IndustryField control={control} readOnly={isReadOnly} />

          <DealScaleField
            control={control}
            readOnly={isReadOnly}
            setValue={setValue}
          />

          <SalesField
            control={control}
            readOnly={isReadOnly}
            setValue={setValue}
          />

          <RevenueField
            control={control}
            readOnly={isReadOnly}
            setValue={setValue}
          />

          <KeyConditionField control={control} readOnly={isReadOnly} />
        </FieldGroup>
      )}

      <Flex align="center" justify="space-between" gap="small">
        <LinkText type="button" onClick={deleteConfirm}>
          <DeleteText />
        </LinkText>

        {(statusNm === "작성중" || !needsKey) && (
          <Flex gap="small">
            <SecondaryButton buttonType="button" clickEvent={tempoAdd}>
              <TempoAddText />
            </SecondaryButton>

            <PrimaryButton buttonType="submit">
              <AddLongText />
            </PrimaryButton>
          </Flex>
        )}

        {(statusNm === "작성 완료" ||
          statusNm === "탐색중" ||
          statusNm === "탐색 완료") && (
          <Flex gap="small">
            {statusNm === "탐색중" || statusNm === "탐색 완료" ? null : (
              <SecondaryButton buttonType="submit">
                <EditLongText />
              </SecondaryButton>
            )}

            <PrimaryButton clickEvent={terminateConfirm}>
              <TerminateLongText />
            </PrimaryButton>
          </Flex>
        )}
      </Flex>
    </CustomForm>
  );
};

export default AddNeed;
