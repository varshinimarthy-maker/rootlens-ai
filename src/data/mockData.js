export const repository = {
  name: "demo-payment-service",
  branch: "main",
  status: "Connected",
  lastCommit: "a82f91c",
};

export const commits = [
  {
    hash: "a82f91c",
    message: "Refactor payment API",
    author: "Rahul Sharma",
    time: "14:10",
    files: 3,
    type: "suspect",
  },
  {
    hash: "c31d7ab",
    message: "Add payment validation",
    author: "Priya Reddy",
    time: "13:42",
    files: 2,
    type: "normal",
  },
  {
    hash: "8ef421a",
    message: "Update authentication middleware",
    author: "Rahul Sharma",
    time: "12:18",
    files: 4,
    type: "normal",
  },
  {
    hash: "1b42c91",
    message: "Improve API error handling",
    author: "Arjun Kumar",
    time: "Yesterday",
    files: 2,
    type: "normal",
  },
];

export const incident = {
  id: "INC-1024",
  title: "Payment Service Failure",
  severity: "HIGH",
  confidence: 87,
  detectedAt: "04 Oct 2026, 14:31:42",
  error:
    "TypeError: Cannot read properties of undefined (reading 'transactionId')",
  rootCause:
    "The recent payment API refactoring changed the response shape returned by PaymentService. PaymentController still expects the previous response object and attempts to access transactionId from an undefined value.",
  likelyCommit: {
    hash: "a82f91c",
    message: "Refactor payment API",
    author: "Rahul Sharma",
  },
  affectedFiles: [
    "src/controllers/PaymentController.js",
    "src/services/PaymentService.js",
  ],
  evidence: [
    "The failing PaymentController function was modified in commit a82f91c.",
    "PaymentService response handling changed in the same commit.",
    "The commit was made approximately 21 minutes before the first reported failure.",
    "The stack trace points to code affected by the refactoring.",
  ],
  suggestedFix:
    "Validate the PaymentService response before accessing transactionId and update PaymentController to handle the new response shape.",
  prevention:
    "Add integration tests for invalid payment responses and enforce response-contract checks between the payment service and controller.",
};

export const timeline = [
  {
    time: "13:42:08",
    title: "Payment validation updated",
    description: "Commit c31d7ab pushed to main.",
    kind: "commit",
  },
  {
    time: "14:10:23",
    title: "Payment API refactored",
    description: "Commit a82f91c changed PaymentService and PaymentController.",
    kind: "warning",
  },
  {
    time: "14:31:42",
    title: "System crash detected",
    description: "Payment endpoint began returning TypeError responses.",
    kind: "error",
  },
  {
    time: "14:33:05",
    title: "Incident created",
    description: "RootLens captured the incident context.",
    kind: "info",
  },
  {
    time: "14:35:18",
    title: "Fix committed",
    description: "Commit def4567 added response validation.",
    kind: "commit",
  },
  {
    time: "14:36:02",
    title: "Error rate returned to normal",
    description: "Payment endpoint recovered after the fix.",
    kind: "success",
  },
];

export const changesDuringIncident = [
  {
    time: "14:35:18",
    author: "Rahul Sharma",
    commit: "def4567",
    change: "Added null/undefined validation to payment response.",
  },
  {
    time: "14:35:44",
    author: "Priya Reddy",
    commit: "ef7812a",
    change: "Updated payment error handling and logging.",
  },
  {
    time: "14:36:00",
    author: "Rahul Sharma",
    commit: "f8a901b",
    change: "Adjusted API response mapping.",
  },
];