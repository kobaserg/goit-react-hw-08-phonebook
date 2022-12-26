import { Puff } from 'react-loader-spinner';
import { LoaderPosition } from './Loader.styled';

export function Loader() {
  return (
    <LoaderPosition>
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#3d8a81"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderPosition>
  );
}
