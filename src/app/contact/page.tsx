import Image from "next/image";
import styles from "./contact.module.css";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number(Optional)" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
