const removeMailTo = email => email.replace(/^mailto:/g, '');

const removeInvalidCharacters = email => (email
  .replace(/(\s|#|'|'|\\)*/g, '')
  .replace(/(,|\.\.|>)/g, '.')
  .replace('@@', '@')
);

const fixTransposedPeriods = email => (email
  .replace(/c\.om$/g, '.com')
  .replace(/n\.et$/g, '.net')
);

const removePeriodAroundAtSign = email => email.replace(/(\.@|@\.)/g, '@');

const handleDifferentCountryTlds = email => (email
  .replace(/\.(o\.uk|couk|co\.um)$/g, '.co.uk')
  .replace(/\.(cojp|co\.lp)$/g, '.co.jp')
);

const fixComsWithAppendedLetters = email => (email
  .replace(/\.co[mn]\.com/g, '.com')
  .replace(/\.com\.$/g, '.com')
  .replace(/\.com(?!cast|\.|@).{1,3}$/g, '.com')
  .replace(/\.co[^op]$/g, '.com')
);

const cleanUpFunkyComs = email => (email
  .replace(/\.c*(c|ck|ci|coi|l|m|n|o|op|cp|0|9)*m+o*$/g, '.com')
  .replace(/\.(c|f|v|x|vc|xc)o+(m|n)$/g, '.com')
);

const cleanUpFunkyNets = email => email.replace(/\.(nte*|n*et*)$/g, '.net');

const cleanUpFunkyOrgs = email => email.replace(/\.og?r?g{0,2}$/g, '.org');

const cleanUpGooglemail = email => email.replace(/@go{0,3}g{0,2}o?le?[mn]?[ail]{1,2}m?[aikl]{0,3}\./g, '@googlemail.');

const cleanUpGmail = email => email.replace(/@g[nm]{0,2}s?[ail]{1,2}[aiklmou]{0,3}\.(?!gov)(?!edu)/g, '@gmail.');

const cleanUpHotmail = email => email.replace(/@h(i|o|p)?y?t?o?a?m?n?t?[aikl]{1,3}l?\./g, '@hotmail.');

const cleanUpYahoo = email => email.replace(/@(ya|yh|ua|ah)+h*a*o+\./g, '@yahoo.');

const cleanUpAol = email => email.replace(/@(ol|ao|ail)\./g, '@aol.');

const cleanUpOtherProviders = email => (email
  .replace(/@co?(m|n)a?cas?t{0,2}\./g, '@comcast.')
  .replace(/@sbc?gl?ob[al]{0,2}l?\./g, '@sbcglobal.')
  .replace(/@ver?i?z?on\./g, '@verizon.')
  .replace(/@icl{0,2}o?u?d\./g, '@icloud.')
  .replace(/@outl?ook?\./g, '@outlook.')
);

const cleanUpKnownComs = email => email.replace(/(@aol|@googlemail|@gmail|@hotmail|@yahoo|@icloud|@outlook)\.(co|net|org)$/g, '$1.com');

const addAPeriodIfTheyForgotIt = email => email.replace(/([^.])(com|org|net)$/g, '$1.$2');

const correctEmailTypos = (email) => {
  let correctedEmail = email;
  correctedEmail = correctedEmail.toLowerCase();
  correctedEmail = removeMailTo(correctedEmail);
  correctedEmail = removeInvalidCharacters(correctedEmail);
  correctedEmail = fixTransposedPeriods(correctedEmail);
  correctedEmail = removePeriodAroundAtSign(correctedEmail);
  correctedEmail = handleDifferentCountryTlds(correctedEmail);
  correctedEmail = fixComsWithAppendedLetters(correctedEmail);
  correctedEmail = cleanUpFunkyComs(correctedEmail);
  correctedEmail = cleanUpFunkyNets(correctedEmail);
  correctedEmail = cleanUpFunkyOrgs(correctedEmail);
  correctedEmail = cleanUpGmail(correctedEmail);
  correctedEmail = cleanUpGooglemail(correctedEmail);
  correctedEmail = cleanUpHotmail(correctedEmail);
  correctedEmail = cleanUpAol(correctedEmail);
  correctedEmail = cleanUpYahoo(correctedEmail);
  correctedEmail = cleanUpOtherProviders(correctedEmail);
  correctedEmail = cleanUpKnownComs(correctedEmail);
  correctedEmail = addAPeriodIfTheyForgotIt(correctedEmail);
  return correctedEmail;
};

export default correctEmailTypos;
