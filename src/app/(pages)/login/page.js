"use client";
import React from "react";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import SubmitButton from "@/app/component/button/SubmitButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Login = () => {
  const schema = yup.object().shape({
    mobileEmail: yup.string().required("Mobile No. / E-mail is required"),
    password: yup.string().required("Password is required"),
    terms: yup.bool().required("Terms must be accepted").oneOf([true]),
  });

  const router = useRouter();

  return (
    <div className={styles.Login}>
      <Container>
        <Row>
          <Col>
            <div className={styles.LoginMain}>
              <h1 className={styles.LoginText}>Login</h1>
              <Formik
                validationSchema={schema}
                initialValues={{
                  mobileEmail: "",
                  password: "",
                  terms: false,
                }}
                onSubmit={(values) => {
                 
                  if (
                    (values.mobileEmail === "6376317484" &&
                      values.password === "mithilesh") ||
                    (values.mobileEmail === "mithilesh@gmail.com" &&
                      values.password === "mithilesh")
                  ) {
                   

                    document.cookie = `UserId=${values.mobileEmail}; path=/`;
                    document.cookie = `Pass=${values.password}; path=/`;
                    toast.success("Login Successfully!");
                    router.push("/");
                  } else {
                    toast.error("Enter valid login credentials!");
                  }
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Mobile No. / E-mail</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Mobile No. / E-mail"
                          name="mobileEmail"
                          value={values.mobileEmail}
                          onChange={handleChange}
                          isInvalid={
                            touched.mobileEmail && !!errors.mobileEmail
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mobileEmail}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        name="terms"
                        label="Keep me logged in"
                        onChange={handleChange}
                        isInvalid={touched.terms && !!errors.terms}
                        feedback={errors.terms}
                        id="validationFormik03"
                      />
                    </Form.Group>
                    <SubmitButton buttonName="LOGIN" />
                    <div
                      style={{
                        margin: "1rem 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link href="/forgot-password">
                        <span style={{ cursor: "pointer" }}>
                          Forgot password?
                        </span>
                      </Link>
                      <Link href="/login-via-otp">
                        <span style={{ cursor: "pointer" }}>Login Via OTP</span>
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: ".5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>New on Underpin?</span>
                      <Link href="/register">
                        <span
                          style={{
                            color: "green",
                            fontWeight: "700",
                            cursor: "pointer",
                          }}
                        >
                          Register free
                        </span>
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
