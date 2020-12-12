import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="Register" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full name" placeholder="Full name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Daftar" />
        <Gap height={100} />
        <Link title="kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
