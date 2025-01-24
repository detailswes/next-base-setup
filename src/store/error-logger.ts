/* eslint-disable @typescript-eslint/no-explicit-any */
import { setToast } from "@/features/toast";

type OnQueryStartedParams = {
  queryFulfilled: Promise<{ data: any }>;
  dispatch: any;
};

const onQueryStartedErrorToast = async (
  args: void,
  { queryFulfilled, dispatch }: OnQueryStartedParams
) => {
  try {
    await queryFulfilled;
  } catch (error:any) {
    dispatch(setToast({ message: error?.response , type: "error" }));
  }
};

export default onQueryStartedErrorToast;
