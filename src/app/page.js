"use client";
import React from "react";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import CarouselSpacing from "./component/carousel/Carousel";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const deleteCookie = (name) => {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  };

  const handleLogout = () => {
    deleteCookie("UserId");
    deleteCookie("Pass");

    router.push("/login");
  };

  return (
    <div className={styles.Home}>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.Top}>
              <div className={`${styles.TopChild} ${styles.TopChildLeft}`}>
                <div className={styles.TopChildLeftWrap1}>
                  <Image
                    src="/images/bronze_frame_with_bronze_crown.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={92}
                    height={92}
                  />
                </div>
                <div className={styles.TopChildLeftWrap2}>
                  <Image
                    src="/images/Group184.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={218.53}
                    height={61.15}
                  />
                </div>
                <div className={styles.TopChildLeftWrap3}>
                  <Image
                    src="/images/0.00.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={218.53}
                    height={61.15}
                  />
                </div>
                <div className={styles.TopChildLeftWrap4}>
                  <Image
                    src="/images/PlusCircle.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={37.1}
                    height={37.1}
                  />
                </div>
              </div>
              <div className={`${styles.TopChild} ${styles.TopChildMiddle}`}>
                <div className={styles.TopChildMiddleWrap}>
                  <Image
                    src="/images/Group183.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={515.38}
                    height={180}
                  />
                </div>
              </div>
              <div className={`${styles.TopChild} ${styles.TopChildRight}`}>
                <div className={styles.TopChildRightWrap1}>
                  <Image
                    src="/images/Group186.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={64.52}
                    height={64.52}
                  />
                </div>
                <div className={styles.TopChildRightWrap1}>
                  <Image
                    src="/images/Group185.png"
                    alt="Description of the image"
                    layout="responsive"
                    width={64.52}
                    height={64.52}
                    onClick={handleLogout}
                    title="Logout"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ color: "red" }}>
          <Col md={4}>
            <div className={styles.BottomChildRight}>
              <div className={styles.BottomChildRightWrap1}>
                <Image
                  src="/images/Component2.png"
                  alt="Description of the image"
                  layout="responsive"
                  width={160}
                  height={765.71}
                />
              </div>
              <div className={styles.BottomChildRightWrap2}>
                <Image
                  src="/images/Frame165.png"
                  alt="Description of the image"
                  layout="responsive"
                  width={341}
                  height={772}
                />
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className={styles.BottomChildLeft}>
              <CarouselSpacing />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
