import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            pinterest
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className="container  py-12 md:flex md:items-center md:justify-between">
      <ul className="flex items-center justify-center md:order-2">
        <FooterLink href={links.twitter} icon={FaTwitter} label="Twitter" name="@Element_Blog" />
      </ul>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          <a href="https://elementlab.net">Element Lab</a> &copy;  2020
        </p>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon, name }) => {
  return (
    <li className="flex  items-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="flex center text-gray-500 hover:text-indigo-600 transition duration-150 ease-in-out"
      >

        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current mr-1" />
        {name}
      </a>
    </li>
  )
}

export default Footer
