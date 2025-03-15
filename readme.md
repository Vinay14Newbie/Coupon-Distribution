# Round-Robin Coupon Distribution with Abuse Prevention

A live web app that distributes coupons to guest users in a round-robin manner while preventing abuse using IP and cookie tracking.

---

## **Tech Stack**

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, Cookie-parser, CORS

---

---

## 🌐 **Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/Vinay14Newbie/Coupon-Distribution.git
```

## **API Endpoints**

POST

```bash
/api/coupons/claim
```

Description

```json
{
  "success": true,
  "coupon": "COUPON123",
  "message": "Congrats! You claimed COUPON123"
}
```

## **Abuse prevention**

IP Tracking: Recorded each user's IP address upon claiming a coupon, restricting subsequent claims from the same IP within a specified time frame (e.g., one
hour).

Cookie Tracking: Used cookies to monitor coupon claims from the same browser session.
