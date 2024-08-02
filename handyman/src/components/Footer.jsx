import { fbIcon } from "../data/icons"
import { linkedIn } from "../data/icons"
import { igIcon } from "../data/icons"
import { ytIcon } from "../data/icons"

export const Footer = () => {
  return (<footer className="grid grid-flow-col space-between my-20 mx-10">
    <div>
      <h3>
        Handyman Services
      </h3>
      <ul>
        <li><a href="">{fbIcon}</a></li>
        <li><a href="">{linkedIn}</a></li>
        <li><a href="">{igIcon}</a></li>
        <li><a href="">{ytIcon}</a></li>
      </ul>
    </div>
    <div className="grid grid-flow-col space-between">
      <div className="grid gap-2">
        <h4 className="font-bold">Services</h4>
        <ul>
          <li>Electrical</li>
          <li>Renovation</li>
          <li>Painting</li>
        </ul>
      </div>
      <div className="grid gap-2">
        <h4 className="font-bold">About Us</h4>
        <ul>
          <li>Our Team</li>
          <li>Our Tools</li>
          <li>Our Goal</li>
        </ul>
      </div>
      <div className="grid gap-2">
        <h4 className="font-bold">Contact Us</h4>
        <ul>
          <li>Ask for a quote</li>
          <li>Work with our team</li>
          <li>Have a question?</li>
        </ul>
      </div>
    </div>
  </footer>)
}