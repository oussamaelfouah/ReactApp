<<<<<<< HEAD
import className from 'classnames';

=======
import className from "classnames";
import { twMerge } from "tailwind-merge";
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
<<<<<<< HEAD
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
=======
  const classes = twMerge(
    className(rest.className, " flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
<<<<<<< HEAD

=======
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
<<<<<<< HEAD
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
=======
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "only one of primary , secondary , sucecess, warning ,danger can be true"
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
      );
    }
  },
};
<<<<<<< HEAD

=======
>>>>>>> b21cf685f40276f3a7d750cf696c7f44a57deec8
export default Button;
