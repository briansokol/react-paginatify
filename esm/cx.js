export default function cx(...classes) {
  let appliedClasses = [];

  classes.forEach((className) => {
    if (typeof className === 'string') {
      appliedClasses.push(className);
    } else if (className !== null && typeof className === 'object'
               && Object.prototype.toString.call(className) !== '[object Array]') {
      appliedClasses = appliedClasses.concat(
        Object.keys(className).filter(key => className[key])
      );
    }
  });

  return appliedClasses.join(' ');
}
