import { changeEmail } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Email = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <input
      type="email"
      onChange={handleChange}
      placeholder="Email"
      value={email}
    />
  );
};

export default Email;
