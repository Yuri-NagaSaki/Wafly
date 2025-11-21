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
      title: 'WAF Firewall Block',
      heading: 'Web Application Firewall blocked your request',
      subHeading: 'Your action triggered a security rule',
      description: 'The action you performed triggered the security mechanism and was blocked. Please try again later<br><br>Multiple actions may trigger this block, including submitting a word or phrase, SQL commands, or malformed data',
    },
    'ip-block': {
      title: 'IP Address Blocked',
      heading: 'Your IP address has been banned',
      subHeading: 'This site has restricted your IP address',
      description: 'Your IP address has been banned from accessing this site',
    },
    'rate-limit': {
      title: 'Rate Limit Exceeded',
      heading: 'Too Many Requests - 429',
      subHeading: 'Your request rate has exceeded the limit',
      description: 'You have sent too many requests in a short period of time. Please try again later<br><br>If you believe this is an error, please contact the website administrator',
    },
    'interactive-challenge': {
      title: 'Interactive Challenge',
      heading: 'Please complete human verification',
      subHeading: 'We need to verify you are a real user',
      description: 'Please complete the verification below to continue accessing the site',
    },
    'managed-challenge': {
      title: 'Advanced Security Verification',
      heading: 'Attack protection mode enabled',
      subHeading: 'The site is under attack and requires additional verification',
      description: 'Please complete the security check below to continue',
    },
    'country-challenge': {
      title: 'Regional Verification',
      heading: 'Geographic location verification',
      subHeading: 'Visitors from your region require additional verification',
      description: 'Please complete the verification below to continue',
    },
    'javascript-challenge': {
      title: 'JavaScript Browser Check',
      heading: 'Verifying your browser...',
      subHeading: 'Automatic security check in progress, please wait',
      description: 'Please wait while we verify your browser security...',
    },
    'under-attack': {
      title: 'Attack Protection Mode',
      heading: 'Website attack protection enabled',
      subHeading: 'Automatic security check in progress, redirecting in 5 seconds',
      description: '::IM_UNDER_ATTACK_BOX::',
    },
    'captcha': {
      title: 'CAPTCHA Verification',
      heading: 'Please complete the CAPTCHA',
      subHeading: 'We need to verify you are not a robot',
      description: 'Please complete the verification below to continue',
    },
    '100x': {
      title: 'Cloudflare Connection Error',
      heading: 'Unable to connect to origin server',
      subHeading: 'An issue occurred between Cloudflare and the website server',
      description: 'Please check your request and try again',
    },
    '5xx': {
      title: 'Server Internal Error',
      heading: 'Website server encountered an error',
      subHeading: 'The server is temporarily unable to process your request',
      description: 'We are working to fix the issue, please try again later',
    },
  },

  footer: {
    rayId: 'Cloudflare Ray ID',
    yourIp: 'Your IP',
    poweredBy: 'Performance & Security by Cloudflare',
    protectionBy: 'Protection by Cloudflare',
  },

  index: {
    title: 'CloudFlare WAF Pages',
    badge: 'Error Page',
    poweredBy: 'Powered by Astro',
  },
};

export default en;
