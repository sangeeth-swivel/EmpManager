import { fetchEmployeeById, selectEmployee, wrapper } from "@/app/store";
import FormEmployee from "@/components/molecules/FormBody/Form";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const EditEmployee: NextPage = () => {
  const content = useSelector(selectEmployee());
  
  console.log(content.employee);
  return <FormEmployee edit={true} employee={content.employee} text={"SAVE"} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id: any = context.params?.id;
    await store.dispatch(fetchEmployeeById(id));
    console.log(context.params?.id);
    return {
      props: {},
    };
  }
);
export default EditEmployee;
