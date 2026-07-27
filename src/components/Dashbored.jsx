import React from "react";
import '../styles/dashboard.css';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiStar,
  FiInstagram,
  FiFacebook,
  FiDownload,
} from "react-icons/fi";


export default function BusinessCard() {
    const phone = "0678809816"; // Replace with the real number
const email = "berrada.zineb1988@gamil.com";
const address =
  "https://maps.app.goo.gl/6URjjAxQyjto1nFFA";
const instagram =
  "https://www.instagram.com/leclair.fes?igsh=MWMzY3czamdzcHZ2cA==";
const facebook =
  "https://www.facebook.com/zineb.berrada.378?rdid=EeW0tLNvVOnGKqFn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CrMvDaPhY%2F#";
const googleReviews =
  "https://search.google.com/local/writereview?placeid=ChIJC5sbVACLnw0RLVnx5_ZGl54";


  const saveContact = () => {
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:L'Eclair
ORG:L'Eclair
TEL;TYPE=CELL:${phone}
END:VCARD`;

  const blob = new Blob([vCard], {
    type: "text/vcard;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "LEclair.vcf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
  return (
    <div className="page">
      <div className="business-card">

        {/* Cover */}
        <div className="cover">
          <img src="/copilot_image_1785168745129.jpeg" alt="Cover" className="cover-image" />

          <div className="brand-pill">
            <img src="/Copilot_20260725_202332.png" alt="Logo" />
            {/* <span>L'Eclair</span> */}
          </div>
        </div>

        {/* Body */}
        <div className="card-body">

          <h1>L'Eclair</h1>

          <h4>Artisan Pâtisserie</h4>

          <p className="subtitle">
            Éclairs · Macarons · Gâteaux sur commande
          </p>

          <div className="separator" />

          <div className="actions">

     <button
  className="action primary"
  onClick={() => window.location.href = `tel:${phone}`}
>
  <FiPhone />
  <span>Call</span>
</button>
            <button
  className="action"
  onClick={() => window.location.href = `mailto:${email}`}
>
  <FiMail />
  <span>Email</span>
</button>

           <button
  className="action"
  onClick={() => window.open(address, "_blank")}
>
  <FiMapPin />
  <span>Location</span>
</button>
           <button
  className="action"
  onClick={() => window.open(googleReviews, "_blank")}
>
  <FiStar />
  <span>Avis Google</span>
</button>

            <button
  className="action"
  onClick={() => window.open(instagram, "_blank")}
>
  <FiInstagram />
  <span>Instagram</span>
</button>
            <button
  className="action"
  onClick={() => window.open(facebook, "_blank")}
>
  <FiFacebook />
  <span>Facebook</span>
</button>
          </div>

          <div className="separator bottom" />

         <button
  className="save-contact"
  onClick={saveContact}
>
  <FiDownload />
  <span>Save Contact</span>
</button>

        </div>

      </div>

      <div className="footer">
        © 2026 L'Eclair · Fait avec amour 🧁
      </div>
    </div>
  );
}
