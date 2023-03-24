import ListLayout from "@/components/templates/ListLayout/ListLayout";
import { useSelector } from "react-redux";
import { getAllEmployees, selectEmployee, wrapper } from "@/app/store";
import { NextPage } from "next";
import { Alert } from "react-bootstrap";

const HomePage: NextPage = () => {
  const content = useSelector(selectEmployee());
  const { statusFetching, fetchEmployeeMessage } = content;

  if (statusFetching === "failed") {
    return <Alert variant="danger">{fetchEmployeeMessage}</Alert>;
  } else if (statusFetching === "success") {
    return <ListLayout data={content.employees} />;
  } else {
    return <></>;
  }
  // return <>
  // <ListLayout data={content.employees} />
  // {console.log(content.fetchEmployeeMessage)}
  // </>
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({}) => {
//       try {
//         await store.dispatch(getAllEmployees());
//       } catch (err) {
//         console.log(err);
//       }
//       console.log("State on server", store.getState());
//       return {
//         props: {resolvedUrl},
//       };
//     }
// );
export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
        try{
            await store.dispatch(getAllEmployees());
        }catch (error) {
            console.log(error);
        }
        console.log("State on server", store.getState());
        return {
            props: {},
        };
    }
);


