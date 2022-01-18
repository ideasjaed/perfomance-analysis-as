import Navbar from "../components/Navbar";

const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Base;
