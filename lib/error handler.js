'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArgumentError = (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(message) {
        _super.call(this, message);
        this.name = 'ArgumentError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return ArgumentError;
}(Error));
exports.ArgumentError = ArgumentError;
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError(message) {
        _super.call(this, message);
        this.name = 'ArgumentOutOfRangeError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
var DeviceMaximumQueueDepthExceededError = (function (_super) {
    __extends(DeviceMaximumQueueDepthExceededError, _super);
    function DeviceMaximumQueueDepthExceededError(message) {
        _super.call(this, message);
        this.name = 'DeviceMaximumQueueDepthExceededError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceMaximumQueueDepthExceededError;
}(Error));
exports.DeviceMaximumQueueDepthExceededError = DeviceMaximumQueueDepthExceededError;
var DeviceNotFoundError = (function (_super) {
    __extends(DeviceNotFoundError, _super);
    function DeviceNotFoundError(message) {
        _super.call(this, message);
        this.name = 'DeviceNotFoundError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceNotFoundError;
}(Error));
exports.DeviceNotFoundError = DeviceNotFoundError;
var FormatError = (function (_super) {
    __extends(FormatError, _super);
    function FormatError(message) {
        _super.call(this, message);
        this.name = 'FormatError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return FormatError;
}(Error));
exports.FormatError = FormatError;
var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        _super.call(this, message);
        this.name = 'UnauthorizedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return UnauthorizedError;
}(Error));
exports.UnauthorizedError = UnauthorizedError;
var NotImplementedError = (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        _super.call(this, message);
        this.name = 'NotImplementedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return NotImplementedError;
}(Error));
exports.NotImplementedError = NotImplementedError;
var NotConnectedError = (function (_super) {
    __extends(NotConnectedError, _super);
    function NotConnectedError(message) {
        _super.call(this, message);
        this.name = 'NotConnectedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return NotConnectedError;
}(Error));
exports.NotConnectedError = NotConnectedError;
var IotHubQuotaExceededError = (function (_super) {
    __extends(IotHubQuotaExceededError, _super);
    function IotHubQuotaExceededError(message) {
        _super.call(this, message);
        this.name = 'IotHubQuotaExceededError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return IotHubQuotaExceededError;
}(Error));
exports.IotHubQuotaExceededError = IotHubQuotaExceededError;
var MessageTooLargeError = (function (_super) {
    __extends(MessageTooLargeError, _super);
    function MessageTooLargeError(message) {
        _super.call(this, message);
        this.name = 'MessageTooLargeError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return MessageTooLargeError;
}(Error));
exports.MessageTooLargeError = MessageTooLargeError;
var InternalServerError = (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message) {
        _super.call(this, message);
        this.name = 'InternalServerError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return InternalServerError;
}(Error));
exports.InternalServerError = InternalServerError;
var ServiceUnavailableError = (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError(message) {
        _super.call(this, message);
        this.name = 'ServiceUnavailableError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return ServiceUnavailableError;
}(Error));
exports.ServiceUnavailableError = ServiceUnavailableError;
var IotHubNotFoundError = (function (_super) {
    __extends(IotHubNotFoundError, _super);
    function IotHubNotFoundError(message) {
        _super.call(this, message);
        this.name = 'IotHubNotFoundError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return IotHubNotFoundError;
}(Error));
exports.IotHubNotFoundError = IotHubNotFoundError;
var IoTHubSuspendedError = (function (_super) {
    __extends(IoTHubSuspendedError, _super);
    function IoTHubSuspendedError(message) {
        _super.call(this, message);
        this.name = 'IoTHubSuspendedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return IoTHubSuspendedError;
}(Error));
exports.IoTHubSuspendedError = IoTHubSuspendedError;
var JobNotFoundError = (function (_super) {
    __extends(JobNotFoundError, _super);
    function JobNotFoundError(message) {
        _super.call(this, message);
        this.name = 'JobNotFoundError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return JobNotFoundError;
}(Error));
exports.JobNotFoundError = JobNotFoundError;
var TooManyDevicesError = (function (_super) {
    __extends(TooManyDevicesError, _super);
    function TooManyDevicesError(message) {
        _super.call(this, message);
        this.name = 'TooManyDevicesError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return TooManyDevicesError;
}(Error));
exports.TooManyDevicesError = TooManyDevicesError;
var ThrottlingError = (function (_super) {
    __extends(ThrottlingError, _super);
    function ThrottlingError(message) {
        _super.call(this, message);
        this.name = 'ThrottlingError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return ThrottlingError;
}(Error));
exports.ThrottlingError = ThrottlingError;
var DeviceAlreadyExistsError = (function (_super) {
    __extends(DeviceAlreadyExistsError, _super);
    function DeviceAlreadyExistsError(message) {
        _super.call(this, message);
        this.name = 'DeviceAlreadyExistsError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceAlreadyExistsError;
}(Error));
exports.DeviceAlreadyExistsError = DeviceAlreadyExistsError;
var DeviceMessageLockLostError = (function (_super) {
    __extends(DeviceMessageLockLostError, _super);
    function DeviceMessageLockLostError(message) {
        _super.call(this, message);
        this.name = 'DeviceMessageLockLostError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceMessageLockLostError;
}(Error));
exports.DeviceMessageLockLostError = DeviceMessageLockLostError;
var InvalidEtagError = (function (_super) {
    __extends(InvalidEtagError, _super);
    function InvalidEtagError(message) {
        _super.call(this, message);
        this.name = 'InvalidEtagError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return InvalidEtagError;
}(Error));
exports.InvalidEtagError = InvalidEtagError;
var InvalidOperationError = (function (_super) {
    __extends(InvalidOperationError, _super);
    function InvalidOperationError(message) {
        _super.call(this, message);
        this.name = 'InvalidOperationError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return InvalidOperationError;
}(Error));
exports.InvalidOperationError = InvalidOperationError;
var PreconditionFailedError = (function (_super) {
    __extends(PreconditionFailedError, _super);
    function PreconditionFailedError(message) {
        _super.call(this, message);
        this.name = 'PreconditionFailedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return PreconditionFailedError;
}(Error));
exports.PreconditionFailedError = PreconditionFailedError;
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError(message) {
        _super.call(this, message);
        this.name = 'TimeoutError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
var BadDeviceResponseError = (function (_super) {
    __extends(BadDeviceResponseError, _super);
    function BadDeviceResponseError(message) {
        _super.call(this, message);
        this.name = 'BadDeviceResponseError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return BadDeviceResponseError;
}(Error));
exports.BadDeviceResponseError = BadDeviceResponseError;
var GatewayTimeoutError = (function (_super) {
    __extends(GatewayTimeoutError, _super);
    function GatewayTimeoutError(message) {
        _super.call(this, message);
        this.name = 'GatewayTimeoutError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return GatewayTimeoutError;
}(Error));
exports.GatewayTimeoutError = GatewayTimeoutError;
var DeviceTimeoutError = (function (_super) {
    __extends(DeviceTimeoutError, _super);
    function DeviceTimeoutError(message) {
        _super.call(this, message);
        this.name = 'DeviceTimeoutError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceTimeoutError;
}(Error));
exports.DeviceTimeoutError = DeviceTimeoutError;
var CloudToDeviceDetachedError = (function (_super) {
    __extends(CloudToDeviceDetachedError, _super);
    function CloudToDeviceDetachedError(message) {
        _super.call(this, message);
        this.name = 'CloudToDeviceDetachedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return CloudToDeviceDetachedError;
}(Error));
exports.CloudToDeviceDetachedError = CloudToDeviceDetachedError;
var DeviceMethodsDetachedError = (function (_super) {
    __extends(DeviceMethodsDetachedError, _super);
    function DeviceMethodsDetachedError(message) {
        _super.call(this, message);
        this.name = 'DeviceMethodsDetachedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceMethodsDetachedError;
}(Error));
exports.DeviceMethodsDetachedError = DeviceMethodsDetachedError;
var TwinDetachedError = (function (_super) {
    __extends(TwinDetachedError, _super);
    function TwinDetachedError(message) {
        _super.call(this, message);
        this.name = 'TwinDetachedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return TwinDetachedError;
}(Error));
exports.TwinDetachedError = TwinDetachedError;
var TwinRequestError = (function (_super) {
    __extends(TwinRequestError, _super);
    function TwinRequestError(message) {
        _super.call(this, message);
        this.name = 'TwinRequestError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return TwinRequestError;
}(Error));
exports.TwinRequestError = TwinRequestError;
var OperationCancelledError = (function (_super) {
    __extends(OperationCancelledError, _super);
    function OperationCancelledError(message) {
        _super.call(this, message);
        this.name = 'OperationCancelledError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return OperationCancelledError;
}(Error));
exports.OperationCancelledError = OperationCancelledError;
var DeviceRegistrationFailedError = (function (_super) {
    __extends(DeviceRegistrationFailedError, _super);
    function DeviceRegistrationFailedError(message) {
        _super.call(this, message);
        this.name = 'ProvisioningRegistrationFailedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return DeviceRegistrationFailedError;
}(Error));
exports.DeviceRegistrationFailedError = DeviceRegistrationFailedError;
var SecurityDeviceError = (function (_super) {
    __extends(SecurityDeviceError, _super);
    function SecurityDeviceError(message) {
        _super.call(this, message);
        this.name = 'SecurityDeviceError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
    return SecurityDeviceError;
}(Error));
exports.SecurityDeviceError = SecurityDeviceError;