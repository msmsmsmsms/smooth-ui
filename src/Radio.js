import React from 'react'
import InnerSwitch from './internal/InnerSwitch'
import createComponent from './internal/createComponent'

const ModalHeader = createComponent(
  ({ css, th, mixin, classNames, PropTypes }) => ({
    name: 'radio',
    render: ({ Component, className, size, ...props }) => (
      <Component
        className={classNames(className, {
          'sui-radio-disabled': props.disabled,
          [`sui-radio-${size}`]: size,
        })}
      >
        <InnerSwitch inputType="radio" {...props}>
          {({ focused, checked, disabled }) => (
            <div
              className={classNames('sui-radio-content', {
                focused,
                checked,
                disabled,
              })}
            >
              <div className="sui-radio-circle" />
            </div>
          )}
        </InnerSwitch>
      </Component>
    ),
    style: css`
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;

      .sui-radio-content {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${th('inputBgColor')};
        border-width: ${th('inputBorderWidth')};
        border-style: solid;
        border-color: ${th('inputBorderColor')};
        transition: ${th('transitionBase')};

        &.checked {
          border-color: ${th('primary')};

          .sui-radio-circle {
            transform: scale(1);
          }
        }

        &.focused {
          ${mixin('controlFocus')};
        }

        &.disabled {
          background-color: ${th('inputDisabledBgColor')};
        }
      }

      .sui-radio-circle {
        width: 0.6rem;
        height: 0.6rem;
        transition: ${th('transitionBase')};
        border-radius: 50%;
        background-color: ${th('primary')};
        transform: scale(0);
      }

      &.sui-radio-sm {
        .sui-radio-content {
          width: 0.875rem;
          height: 0.875rem;
        }

        .sui-radio-circle {
          width: 0.525rem;
          height: 0.525rem;
        }
      }

      &.sui-radio-lg {
        .sui-radio-content {
          width: 1.25rem;
          height: 1.25rem;
        }

        .sui-radio-circle {
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    `,
    propTypes: {
      size: PropTypes.oneOf(['sm', 'lg']),
    },
  }),
)

export default ModalHeader
