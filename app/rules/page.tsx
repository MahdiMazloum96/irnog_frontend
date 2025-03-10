import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { RulesMarkDownText } from "./RulesMarkDownText";
import { Card } from "@/components/ui/card";

interface RulesProps {}
const Rules: FC<RulesProps> = () => {
  return (
    <Card className="text-white leading-10  overflow-auto text-right h-auto mb-10  p-8 mx-8 backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 border border-white/20 shadow-lg select-none">
      <ReactMarkdown>{RulesMarkDownText}</ReactMarkdown>
    </Card>
  );
};
export default Rules;
