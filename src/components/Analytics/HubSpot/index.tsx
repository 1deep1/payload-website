'use client'

import { usePrivacy } from '@root/providers/Privacy/index.js'
import Script from 'next/script'
import React, { Fragment } from 'react'

export const HubSpot: React.FC = () => {
  const { cookieConsent } = usePrivacy()

  if (!cookieConsent) {
    return null
  }

  return (
    <Fragment>
      <Script async defer src="//js.hs-scripts.com/48869948.js" id="hs-script-loader" />
    </Fragment>
  )
}
