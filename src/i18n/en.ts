/**
 * English language pack
 */
export const en = {
  site: {
    title: 'Cloudflare Security Protection',
    description: 'This site is using security services to protect itself from online attacks',
    adminContact: 'Please contact the website administrator',
  },

  errorPages: {
    'waf-block': {
      title: 'Access Denied',
      heading: 'Sorry, your access has been blocked',
      subHeading: 'This site is using security services to protect itself from online attacks',
      description: 'The action you performed triggered the security mechanism and was blocked. Please try again later<br><br>Multiple actions may trigger this block, including submitting a word or phrase, SQL commands, or malformed data',
    },
    'ip-block': {
      title: 'Access Denied',
      heading: 'Sorry, your access has been blocked',
      subHeading: 'This site is using security services to protect itself from online attacks',
      description: 'Your IP address has been banned from accessing this site',
    },
    'under-attack': {
      title: 'Security Check...',
      heading: 'Security Check in Progress...',
      subHeading: 'Automatic security check is in progress, you will be redirected to the requested page in approximately 5 seconds.',
      description: '::IM_UNDER_ATTACK_BOX::',
    },
    'captcha': {
      title: 'Verify Your Identity',
      heading: 'Please Complete Verification',
      subHeading: 'This site is using security services to protect itself from online attacks',
      description: 'Please complete the verification below to continue',
    },
    '100x': {
      title: 'Client Error',
      heading: 'Request Error',
      subHeading: 'Your request could not be completed',
      description: 'Please check your request and try again',
    },
    '5xx': {
      title: 'Server Error',
      heading: 'Service Temporarily Unavailable',
      subHeading: 'The server encountered an error',
      description: 'We are working to fix the issue, please try again later',
    },
  },

  footer: {
    rayId: 'Cloudflare Ray ID',
    yourIp: 'Your IP',
    poweredBy: 'Performance & Security by Cloudflare',
  },

  index: {
    title: 'Cloudflare WAF',
    badge: 'Error Page',
    poweredBy: 'Powered by Astro',
  },
};

export default en;
