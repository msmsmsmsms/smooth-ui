/* eslint-disable jsx-a11y/label-has-for */
import createComponent from './internal/createComponent'

const Label = createComponent(({ css, PropTypes }) => ({
  name: 'label',
  defaultComponent: 'label',
  style: css`
    display: inline-block;
    margin-bottom: 0.5rem;
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default Label
