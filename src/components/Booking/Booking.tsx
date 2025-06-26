import styles from "./Booking.module.css";
import { Button } from "../../shared/UIkit/Button/Button";
import Container from "../../shared/UIkit/Container/Container";

export const Booking = () => {
  return (
    <section className={styles.bookingAd}>
      <Container className={styles.bookingContainer}>
        <div className={styles.sectionBody}>
          <div className={styles.adContainer}>
            <div className={styles.bookingOffer}>
              <div className={styles.heading}>
                <h2 className={styles.headingMain}> book dental appointment</h2>
                <h2 className={styles.headingMainText}>
                  get <span className={styles.blueText}>10%-off</span> your
                  first visit
                </h2>
              </div>
              <p className={styles.headingDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <span className={styles.notVisibleText}> incididunt ut labore et dolore.</span>
              </p>
              <Button className={styles.bookNowButton}>
                Book now
                <img
                  src="./img/booking/arrow.svg"
                  width={16}
                  height={17}
                  alt=""
                  aria-hidden={true}
                />
              </Button>
            </div>
            <div className={styles.containerRight}>
              <img
                src="./img/booking/doctor.svg"
                width={390}
                height={559}
                alt="image of doctor"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
