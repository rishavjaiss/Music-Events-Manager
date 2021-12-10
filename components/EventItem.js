import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem({ event, key }) {
  return (
    <div className={styles.event} key={key}>
      <div className={styles.image} key={key}>
        <Image
          src={
            event.image?.formats.thumbnail.url
              ? event.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width="170"
          height="100"
        />
      </div>
      <div className={styles.info}>
        <span>
          {new Date(event.date).toLocaleDateString("en-IN")} at {event.time}
        </span>
        <h3>{event.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${event.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
