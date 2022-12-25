import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getRandomAPI, IEntry } from '../../api/logrocket/getRandomAPI';
import Page from './ssr';

const pageInfo = {
  pageNm: 'CSR Page',
  pageDesc: 'Client Side Rendring',
};

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
`;
const StatusP = styled.p`
  color: red;
`;

function LogRocketCsr() {
  const queryClient = useQueryClient();

  // const [entries, setEntries] = useState<IEntry[]>([]);

  const {
    isLoading,
    error,
    isFetching,
    data: entry,
  } = useQuery<IEntry, Error>('getRandomAPI', getRandomAPI, {
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
    // onSuccess: (data) => {
    //   setEntries((prev) => ({ ...prev, data }));
    // },
  });

  // const mutaion = useMutation(getRandomAPI, {
  //   onSuccess: () => {
  //     console.log("queryClient.invalidateQueries('getRandomAPI');");

  //     queryClient.invalidateQueries('getRandomAPI');
  //   },
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (isFetching) return;
  // if (error) return <p>{error.message}</p>;
  // if (!entry) return <p>No data</p>;

  return (
    <Container>
      <div>
        <StatusP>{`isLoading: ${isLoading ? true : false}`}</StatusP>

        <StatusP>{`isFetching: ${isFetching ? true : false}`}</StatusP>

        <StatusP>{`error : ${error ? true : false}`}</StatusP>

        <StatusP>{`entry data : ${!entry ? true : false}`}</StatusP>
      </div>

      <h1>
        React-Query : Refetching data Every 3s and when window is focused
        everytime.
      </h1>

      {entry && <Page entry={entry} pageInfo={pageInfo} />}
    </Container>
  );
}

export default LogRocketCsr;
