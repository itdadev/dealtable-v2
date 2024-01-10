import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomForm } from "@/components/ui/form";
import { FieldGroup, FormDescription } from "@/components/ui/form/CustomForm";
import { DELETE_USER_API_URL } from "@/constants/apiUrls";
import { PrimaryButton } from "@/components/ui/buttons";
import { useUserContext } from "@/context/AuthContext";
import { CurrentPasswordField } from "@/components/ui/fields/Fields";
import { zodDeleteAccount } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { ButtonWrapper } from "@/_root/pages/user/JoinComplete";
import { ModalContainer } from "@/components/ui/modal";
import {
  CancelText,
  DeleteAccountDescText,
  DeleteAccountLongText,
  DeleteUserAccountText,
} from "@/util/language-setting/texts/TranslatedTexts";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const { logoutUser } = useUserContext();

  const [password, setPassword] = useState("");

  const [confirmModal, setConfirmModal] = useState(false);

  const [deleteDoneAlert, setDeleteDoneAlert] = useState(false);

  const { control, handleSubmit, watch, setError } = useForm({
    resolver: zodResolver(zodDeleteAccount),
    mode: "onChange",
    defaultValues: {
      user_pw: "",
    },
  });

  function logout() {
    logoutUser();

    navigate("/");
  }

  const { mutate: deleteUserFunction } = useMutation(
    async () => {
      const res = await Interceptor.delete(DELETE_USER_API_URL, {
        data: password,
      });

      return res;
    },
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          logout();
          navigate("/", { state: { mutateStatus: "deleteAccount" } });
        }
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setConfirmModal(false);

          setError("user_pw", {
            message: "현재 비밀번호와 일치하지 않습니다.",
          });
        }
      },
    },
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
      <ModalContainer
        title={<DeleteUserAccountText />}
        open={confirmModal}
        onOk={deleteComplete}
        onCancel={handleCancel}
        okText={<DeleteAccountLongText />}
        cancelText={<CancelText />}
      >
        <DeleteAccountDescText />
      </ModalContainer>

      <FieldGroup>
        <FormDescription>
          <DeleteUserAccountText />
        </FormDescription>

        <CurrentPasswordField control={control} />
      </FieldGroup>

      <ButtonWrapper>
        <PrimaryButton buttonType="submit">
          <DeleteAccountLongText />
        </PrimaryButton>
      </ButtonWrapper>
    </CustomForm>
  );
};

export default DeleteAccount;
