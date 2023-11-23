import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Modal } from "antd";

import { CustomForm, TextAreaInput, TextInput } from "@/components/ui/form";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { addNeedsUrl } from "@/constants/apiUrls";
import {
  dealScalePH,
  industryPH,
  keyConditionPH,
  revenuePH,
  salesPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import { zodNeedsAdd } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";

const AddNeed = () => {
  const [confirmModal, setConfirmModal] = useState({
    complete: false,
    tempo: false,
  });

  const navigate = useNavigate();

  const { control, handleSubmit, watch } = useForm({
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

  const { mutate: addNeedsFunction } = useMutation(
    (data) =>
      Interceptor.post(addNeedsUrl, {
        ...data,
        complete: true,
        sales: data?.sales !== "" ? data?.sales : null,
        revenue: data?.revenue !== "" ? data?.revenue : null,
      }),
    {
      onSuccess: () => {
        navigate("/need/add-complete");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: tempoAddNeedsFunction } = useMutation(
    (data) =>
      Interceptor.post(addNeedsUrl, {
        ...data,
        complete: false,
        sales: data?.sales !== "" ? data?.sales : null,
        revenue: data?.revenue !== "" ? data?.revenue : null,
      }),
    {
      onSuccess: () => {
        navigate("/need");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const joinSubmit = useCallback((data) => {
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

  const doneComplete = useCallback(() => {
    addNeedsFunction(watch());
  }, [addNeedsFunction, watch]);

  const doneTempo = useCallback(() => {
    tempoAddNeedsFunction(watch());
  }, [tempoAddNeedsFunction, watch]);

  const handleCancel = (type) => {
    setConfirmModal({
      complete: false,
      tempo: false,
    });
  };

  return (
    <CustomForm submitEvent={handleSubmit(joinSubmit)}>
      <Modal
        title="인수 니즈 생성"
        open={confirmModal.complete}
        onOk={doneComplete}
        onCancel={handleCancel}
        okText="생성"
        cancelText="취소"
      >
        인수 니즈를 생성하시겠습니까?
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

      <FormTitle>인수 니즈</FormTitle>

      <FieldGroup>
        <TextAreaInput
          name="industry"
          control={control}
          placeholder={industryPH}
          maxLength={200}
        />

        <TextInput
          name="deal_scale"
          control={control}
          placeholder={dealScalePH}
        />

        <TextInput
          type="number"
          name="sales"
          control={control}
          placeholder={salesPH}
        />

        <TextInput
          type="number"
          name="revenue"
          control={control}
          placeholder={revenuePH}
        />

        <TextAreaInput
          name="key_condition"
          control={control}
          placeholder={keyConditionPH}
          maxLength={700}
        />
      </FieldGroup>

      <Flex gap="small">
        <SecondaryButton fullwidth clickEvent={tempoAdd}>
          임시저장
        </SecondaryButton>

        <PrimaryButton fullwidth buttonType="submit">
          생성하기
        </PrimaryButton>
      </Flex>
    </CustomForm>
  );
};

export default AddNeed;
