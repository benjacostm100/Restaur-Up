import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero"; // 👈 Nuevo import
import ProblemSolution from "@/components/ProblemSolution";
import IndexSections from "@/components/IndexSections";
import CTAFinal from "@/components/CTAfinal";

const Index = () => {
  return (
    <Layout>
      <Hero /> {/* 👈 Hero separado */}
      <ProblemSolution /> 
      <IndexSections/> 
      <CTAFinal/> 
    </Layout>

  );
};

export default Index;
