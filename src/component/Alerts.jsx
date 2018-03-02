import { UIInput, OnClickEvent } from "rainbowui-core";
import PropTypes from 'prop-types';
import { Util } from "rainbow-foundation-tools";

export default class Alerts extends UIInput {
    constructor(props) {
        super(props)
    }
    static deleteAlerts(id) {
        return $("#" + id).remove();
    }
    renderInput() {
        let classes = 'alert alert-dismissible fade show alert-' + this.props.alertType;
        return (
            <div id={this.componentId} className={classes} role="alert">
                <button type="button" className="close" data-dismiss={Util.parseBool(this.props.customDelete) ? "" : "alert"} aria-label="Close" onClick={this.onClickItem.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.props.children}
            </div>
        );
    }

    onClickItem() {
        if (this.props.onClose) {
            this.props.onClose(new OnClickEvent(this));
        }
    }
};


/**
 * Alerts component prop types
 */
Alerts.propTypes = $.extend({}, UIInput.propTypes, {
    alertType: PropTypes.string,
    onClose: PropTypes.func,
    customDelete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
});

/**
 * Get Alerts component default props
 */
Alerts.defaultProps = $.extend({}, UIInput.defaultProps, {
    alertType: 'primary',
    customDelete: false
});
