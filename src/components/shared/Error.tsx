interface ErrorProps {
  mensaje: string;
}

const Error = ({ mensaje }: ErrorProps) => {
  return <p className="errorMsg">{mensaje}</p>;
};

export default Error;
