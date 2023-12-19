import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";

import { CustomForm } from "@/components/ui/form";
import { FieldGroup, FormDescription } from "@/components/ui/form/CustomForm";
import { DELETE_USER_API_URL } from "@/constants/apiUrls";
import { PrimaryButton } from "@/components/ui/buttons";
import { useUserContext } from "@/context/AuthContext";
import { CurrentPasswordField } from "@/components/ui/fields/Fields";
import { zodDeleteAccount } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { ButtonWrapper } from "@/_root/pages/user/JoinComplete";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUserContext();

  const [password, setPassword] = useState("");

  const [confirmModal, setConfirmModal] = useState(false);

  const { control, handleSubmit, watch, setError } = useForm({
    resolver: zodResolver(zodDeleteAccount),
    mode: "onSubmit",
    defaultValues: {
      user_pw: "",
    },
  });

  function logout() {
    logoutUser();

    navigate("/login");
  }

  const { mutate: deleteUserFunction } = useMutation(
    async () => {
      const res = await Interceptor.delete(DELETE_USER_API_URL, {
        data: password,
      });

      return res;
    },
    {
      onSuccess: () => {
        Modal.success({
          onOk: logout(),
          content: "회원 탈퇴가 정상적으로 처리되었습니다.",
        });
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setConfirmModal(false);

          setError("user_pw", {
            message: "현재 비밀번호와 일치하지 않습니다.",
          });
        }
      },
    }
  );

  const handleCancel = useCallback(() => {
    setConfirmModal(false);
  }, []);

  const deleteComplete = useCallback(() => {
    deleteUserFunction(watch("user_pw"));
  }, [deleteUserFunction, watch]);

  const deleteAccountSubmit = useCallback((data) => {
    setPassword(data);
    setConfirmModal(true);
  }, []);

  return (
    <CustomForm submitEvent={handleSubmit(deleteAccountSubmit)}>
      <Modal
        title="회원 탈퇴하기"
        open={confirmModal}
        onOk={deleteComplete}
        onCancel={handleCancel}
        okText="탈퇴하기"
        cancelText="취소"
      >
        서비스에서 탈퇴하시겠습니까? 지금까지 생성한 니즈가 삭제됩니다.
      </Modal>

      <FieldGroup>
        <FormDescription>회원 탈퇴하기</FormDescription>

        <CurrentPasswordField control={control} />
      </FieldGroup>

      <ButtonWrapper>
        <PrimaryButton buttonType="submit">탈퇴하기</PrimaryButton>
      </ButtonWrapper>
    </CustomForm>
  );
};

export default DeleteAccount;
