// Mock referral stats data
export const statsData = [
  {
    id: 1,
    label: "Total Balance",
    value: "₹24,580",
    icon: "wallet",
    color: "#4f46e5",
    bg: "#eef2ff",
    trend: "+12%",
  },
  {
    id: 2,
    label: "Discount Percentage",
    value: "18%",
    icon: "percent",
    color: "#7c3aed",
    bg: "#f5f3ff",
    trend: "+3%",
  },
  {
    id: 3,
    label: "Total Referral",
    value: "1,284",
    icon: "users",
    color: "#06b6d4",
    bg: "#ecfeff",
    trend: "+28",
  },
  {
    id: 4,
    label: "Discount Amount",
    value: "₹3,240",
    icon: "tag",
    color: "#10b981",
    bg: "#ecfdf5",
    trend: "+₹340",
  },
  {
    id: 5,
    label: "Commission Amount",
    value: "₹9,870",
    icon: "coins",
    color: "#f59e0b",
    bg: "#fffbeb",
    trend: "+₹870",
  },
  {
    id: 6,
    label: "Total Earning",
    value: "₹34,450",
    icon: "trending",
    color: "#ec4899",
    bg: "#fdf2f8",
    trend: "+₹1,200",
  },
  {
    id: 7,
    label: "Commission Discount",
    value: "₹1,560",
    icon: "badge",
    color: "#ef4444",
    bg: "#fef2f2",
    trend: "+₹160",
  },
  {
    id: 8,
    label: "Total Bank Transfer",
    value: "₹18,920",
    icon: "bank",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    trend: "+₹920",
  },
];

export const referralLink = "https://nxtwave.io/ref/shrija1804";
export const referralCode = "SHRIJA1804";

// Generate 80 mock table rows to support pagination
const services = [
  "Web Development", "Full Stack", "Data Science", "UI/UX Design",
  "Cloud Computing", "Mobile Dev", "Cybersecurity", "AI & ML",
  "DevOps", "Blockchain"
];

const names = [
  "Aarav Shah", "Priya Nair", "Rahul Mehta", "Sneha Reddy", "Kiran Joshi",
  "Ananya Singh", "Vikram Rao", "Divya Patel", "Arjun Kumar", "Meera Iyer",
  "Rohan Gupta", "Pooja Sharma", "Aditya Bose", "Kavya Menon", "Nikhil Das",
  "Tanvi Verma", "Siddharth Nair", "Ishaan Chopra", "Riya Bajaj", "Yash Malhotra",
  "Kritika Sinha", "Manish Tiwari", "Diya Agarwal", "Ayaan Khan", "Nisha Kapoor",
  "Soham Desai", "Pallavi Jain", "Dhruv Saxena", "Ankita Roy", "Varun Pillai",
  "Shruti Ghosh", "Parth Mishra", "Aditi Pandey", "Kabir Mukherjee", "Simran Gill",
  "Tejas Kulkarni", "Shreya Anand", "Rohit Yadav", "Aisha Siddiqui", "Dev Patel",
  "Nandita Choudhury", "Sameer Lal", "Gayatri Subramaniam", "Akash Bansal", "Ruhi Mittal",
  "Vivek Tripathi", "Preeti Khanna", "Nitin Bhatt", "Lavanya Nambiar", "Mohit Deshpande",
  "Charu Rastogi", "Shyam Bhosle", "Neha Dubey", "Alok Srivastava", "Bindiya Chawla",
  "Rajesh Hegde", "Sunita Krishnan", "Gaurav Chatterjee", "Manya Oberoi", "Suraj Wani",
  "Amrita Sengupta", "Harish Naidu", "Padma Rajan", "Deepak Mathur", "Ritika Sethi",
  "Bhuvan Thakur", "Namrata Sawant", "Jatin Khatri", "Swati Patil", "Mihir Shah",
  "Rashmi Bakshi", "Abhinav Saxena", "Taruna Kohli", "Suresh Murthy", "Geeta Sharma",
  "Arun Venkatesh", "Hema Soni", "Chirag Mehra", "Neeraja Rao", "Prakash Reddy",
];

function randomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date(2025, 4, 30);
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function randomProfit() {
  const amount = (Math.random() * 4000 + 200).toFixed(0);
  return `₹${parseInt(amount).toLocaleString("en-IN")}`;
}

export const generateMockTableData = () =>
  names.map((name, i) => ({
    id: i + 1,
    name,
    serviceName: services[i % services.length],
    date: randomDate(),
    profit: randomProfit(),
  }));
