import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/global.css";

export default function Home() {
  return (
    <div>
      <p><Link to="/cls">Go to <strong>CLS</strong> page</Link></p>

      {/* The missing `.premature-render-trigger` is the only difference between the two pages. */}

      <div className="order-changer">
        <div className="order-changer__cover">
          <StaticImage src="../images/gatsby-astronaut.png" alt="A Gatsby astronaut" />
        </div>

        <div className="order-changer__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc augue, rutrum id hendrerit quis, molestie at mauris. Proin condimentum efficitur convallis. Vivamus rhoncus ex vitae pretium consequat. Suspendisse et augue nec nulla pretium finibus vel sit amet nulla. Pellentesque consequat finibus sapien, id malesuada enim aliquet ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a lacus id lorem placerat ornare. Cras fringilla ultricies ipsum ut tempor. Sed eget ultricies lacus, non lobortis ex. Sed odio nisi, pharetra sit amet massa sed, dictum mattis diam.</p>
          <p>Sed at tincidunt odio. Phasellus a gravida est. Vivamus ut tortor iaculis, tristique mi non, porttitor dui. Curabitur lectus magna, pulvinar vel purus vel, rhoncus vestibulum massa. Sed eget sapien facilisis, molestie ante quis, ultricies elit. Fusce eu mattis nisl, nec placerat eros. Aenean sagittis luctus justo, nec dapibus libero aliquam eu. Ut euismod pharetra cursus. Nam efficitur neque leo, a pharetra eros interdum nec. Vivamus faucibus varius tellus, id viverra tortor. Nunc in rutrum dolor, a sagittis purus. Vivamus sit amet orci imperdiet, porttitor sapien et, scelerisque mi. Mauris id augue vitae libero pulvinar tempor. Sed consectetur imperdiet magna, ut sagittis nisl fermentum non. Fusce sed eleifend enim.</p>
          <p>Donec viverra non nunc ac tempus. Nam in elementum leo. Aenean a magna feugiat, auctor ex at, blandit enim. In hac habitasse platea dictumst. Curabitur a eros scelerisque, faucibus lorem non, mollis urna. Pellentesque sapien dui, congue quis dui dignissim, eleifend tincidunt urna. Phasellus pretium libero pellentesque urna posuere, sed aliquet turpis dapibus. Nam interdum condimentum lorem, et accumsan nibh cursus finibus. Maecenas gravida urna cursus mauris dictum, ac elementum erat iaculis. Fusce id blandit arcu. Aenean accumsan ut nisi ut cursus. Nam molestie libero nec massa sagittis pretium.</p>
        </div>
      </div>
    </div>
  );
}
