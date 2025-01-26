import LoanCalculator from "@/components/loan-calculator";

const LoanCalculatorPage = () => {
  // Provide a default or dynamic value for `selectedCategory`
  const selectedCategory = "default-category"; // Replace with your actual value or logic

  return (
    <div>
      <LoanCalculator selectedCategory={selectedCategory} />
    </div>
  );
};

export default LoanCalculatorPage;
