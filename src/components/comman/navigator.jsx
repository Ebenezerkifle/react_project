import { useNavigate } from "react-router-dom";

const Navigator = ({ to }) => {
  const navigate = useNavigate();
  console.log(to);
  return navigate(to);
};

export default Navigator;
