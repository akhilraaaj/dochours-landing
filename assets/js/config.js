const priceApiLink = 'https://irisdoctors.in/api/v1/subscription/plans';

const apiDummyData = 
{
    "monthlyPlans": {
        "free": {
            "amount": 99900,
            "created_at": "2024-05-31T09:23:20.319727",
            "description": "Free - plan",
            "extra": null,
            "features": null,
            "id": "aaf44522-f918-492b-9c9b-971e63e02554",
            "interval": 1,
            "limits": null,
            "name": "Free",
            "notes": {
                "anual_revenue": 11988,
                "appoiment_limit": 1000,
                "sms_annual_changes": 7200,
                "sms_credit": 3000,
                "sms_deducting_charges": 4788,
                "sms_monthly_charges": 600,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OH3A9EHfMAcZDS",
            "status": "active"
        },
        "basic": {
            "amount": 299900,
            "created_at": "2024-06-12T12:53:10.888289",
            "description": "Growth - plan",
            "extra": null,
            "features": null,
            "id": "dc9f2d68-3a9d-43dd-af34-0aa3e53fad86",
            "interval": 1,
            "limits": null,
            "name": "Growth",
            "notes": {
                "anual_revenue": 35988,
                "appoiment_limit": 2500,
                "sms_annual_changes": 18000,
                "sms_credit": 7500,
                "sms_deducting_charges": 17988,
                "sms_monthly_charges": 1500,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OLr9G1DFiDXJkL",
            "status": "active"
        },
        "enterprise": {
            "amount": 599900,
            "created_at": "2024-06-12T12:53:28.361749",
            "description": "Enterprise - plan",
            "extra": null,
            "features": null,
            "id": "83e36bbb-145e-4f90-aef7-48b46a8bbc34",
            "interval": 1,
            "limits": null,
            "name": "Enterprise",
            "notes": {
                "anual_revenue": 71988,
                "appoiment_limit": 5000,
                "sms_annual_changes": 36000,
                "sms_credit": 15000,
                "sms_deducting_charges": 35988,
                "sms_monthly_charges": 3000,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OLr9Z71CbyrBTG",
            "status": "active"
        }
    },
    "yearlyPlans": {
        "free": {
            "amount": 99800,
            "created_at": "2024-05-31T09:23:20.319727",
            "description": "Free - plan",
            "extra": null,
            "features": null,
            "id": "aaf44522-f918-492b-9c9b-971e63e02554",
            "interval": 1,
            "limits": null,
            "name": "Free",
            "notes": {
                "anual_revenue": 11988,
                "appoiment_limit": 1000,
                "sms_annual_changes": 7200,
                "sms_credit": 3000,
                "sms_deducting_charges": 4788,
                "sms_monthly_charges": 600,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OH3A9EHfMAcZDS",
            "status": "active"
        },
        "basic": {
            "amount": 299800,
            "created_at": "2024-06-12T12:53:10.888289",
            "description": "Growth - plan",
            "extra": null,
            "features": null,
            "id": "dc9f2d68-3a9d-43dd-af34-0aa3e53fad86",
            "interval": 1,
            "limits": null,
            "name": "Growth",
            "notes": {
                "anual_revenue": 35988,
                "appoiment_limit": 2500,
                "sms_annual_changes": 18000,
                "sms_credit": 7500,
                "sms_deducting_charges": 17988,
                "sms_monthly_charges": 1500,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OLr9G1DFiDXJkL",
            "status": "active"
        },
        "enterprise": {
            "amount": 599800,
            "created_at": "2024-06-12T12:53:28.361749",
            "description": "Enterprise - plan",
            "extra": null,
            "features": null,
            "id": "83e36bbb-145e-4f90-aef7-48b46a8bbc34",
            "interval": 1,
            "limits": null,
            "name": "Enterprise",
            "notes": {
                "anual_revenue": 71988,
                "appoiment_limit": 5000,
                "sms_annual_changes": 36000,
                "sms_credit": 15000,
                "sms_deducting_charges": 35988,
                "sms_monthly_charges": 3000,
                "sms_per_appointment_charges": 0.6
            },
            "payment_gateway_service": "razorpay",
            "period": "monthly",
            "plan_id": "plan_OLr9Z71CbyrBTG",
            "status": "active"
        }
    }
}