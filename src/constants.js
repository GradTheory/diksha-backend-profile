import { BASE_URL } from './config';

export const production = 0;
export const staging = 1;
export const local = 2;

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const AUTH_COOKIE_KEY = 'AUTHORIZATION';

export const REGISTER_STORE_EMAIL_AUTHENTICATE_ROUTE = (consumer) =>
    `/api/v1/auth/${consumer}/validate/email/link`;

export const TOKEN_TYPES = {
    REGISTER_STORE_AUTHENTICATION_TOKEN_TYPE: 1,
    LOGIN_STORE_TOKEN_TYPE: 2,
    SUB_ADMIN_LOGIN:3
};

export const REGISTER_STORE_MAIL_INFO = {
    SUBJECT: 'Welcome to Open Class',
    Text: (token, consumer) => {
        return `${BASE_URL()}${REGISTER_STORE_EMAIL_AUTHENTICATE_ROUTE(
            consumer
        )}?token=${encodeURIComponent(token)}`;
    }
};

export const CREATE_SUB_USER_MAIL = {
    SUBJECT: 'Welcome to Open Class Admins',
    Text: ({ businessName, firstName,email,password }) => {
        return `Hey ${firstName}. You have been added as sub admin for the Business ${businessName}.
        Please find your credentials below:
        Email: ${email}
        Password: ${password}`;
    }
};

export const FORGOT_PASSWORD_MAIL_INFO = {
    SUBJECT: 'Create New Password'
};

export const CLASS_AGE_TYPES = {
    ADULT: 0,
    ADULT_AND_CHILDREN: 1,
    CHILDREN: 2
};

export const CLASS_TYPE = {
    MULTI_SESSION_FREQUENTLY_REPEAT: 0,
    ONE_TIME: 1,
    MULTI_SESSION_WEEKLY_REPEAT: 2
};

export const TIME_ZONES = {
    India: { name: 'India & Srilanka' }
};

export const USER_TYPES = {
    CUSTOMER: 'customer',
    STORE_OWNERS: 'store'
};

export const PAYMENT_PLAN_TYPES = {
    TRIAL_CLASS: 0,
    ONE_TIME_FULL_COURSE: 1,
    RECURRING_MONTHLY: 2,
    RECURRING_WEEKLY: 3,
    CUSTOM_PAYMENT_PLAN: 4,
    DROP_IN_PLAN : 5
};

export const INSTALLMENT_TYPE = {
    WEEKLY: 0,
    MONTHLY: 1
};

export const weeklyRepeatDays = {
    0: 'MONDAY',
    1: 'TUESDAY',
    2: 'WEDNESDAY',
    3: 'THURSDAY',
    4: 'FRIDAY',
    5: 'SATURDAY',
    6: 'SUNDAY'
};

export const PERMISSION_ROLES = {
    Basic: 0,
    Low: 1,
    Medium: 2,
    High: 3,
    Owner: 4
};

export const PERMISSIONS_MAP = {
    ACCESS_OWN_CALENDAR: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, key: 1 },
    ACCESS_OTHER_STAFF_CALENDAR: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 2 },
    BOOK_SERVICES: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 3 },
    HOME_DASHBOARD: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 4 },
    MANAGE_ATTENDANCE: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, key: 5 },
    ASSIGNED_CUSTOMER_CONTACT: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 6 },
    ALL_CUSTOMER_INFO: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 7 },
    ADD_CUSTOMERS: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 8 },
    EDIT_OWN_BOOKING_TIMINGS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 9 },
    ADD_AND_EDIT_SERVICES: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 11 },
    ADD_PACKAGES: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 12 },
    SEE_SALES_RECORDS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 14 },
    EDIT_PRICES_AT_CHECKOUT: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 15 },
    ADD_SALES_RECORD: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 16 },
    DAILY_SALES_DATA: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 17 },
    CHANGE_PAYMENT_STATUS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 18 },
    CLASS_TIME_REMINDER: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, key: 20 },
    CLASS_UPDATE: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, key: 21 },
    PAYMENT_REMINDER: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 22 },
    RESPOND_TO_REVIEWS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 23 },
    MESSAGE_EMAIL: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, key: 24 },
    ADD_MEMBERS: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 26 },
    EDIT_WORKING_HOURS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 27 },
    CLOSED_DATES: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 28 },
    EDIT_PERMISSION_LEVEL: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 29 },
    ALL_REPORTS: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 31 },
    ADD_EDIT_FORMS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 33 },
    VIEW_RESPONSES: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 34 },
    EDIT_RESPONSES: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 35 },
    BUSINESS_INFO: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 37 },
    MANAGE_LOCATIONS: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 38 },
    NOTIFICATION_SETTINGS: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 1, key: 39 },
    PAYMENT_INFORMATION: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, key: 40 }
};

export const ENTITY_STORE='store'
export const ENTITY_CUSTOMER='customer'


export const allowedEntity= [ENTITY_CUSTOMER,ENTITY_STORE]

export const DEFAULT_LOCATION_KEY = 'DEFAULT_LOCATION';
