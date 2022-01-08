import React from 'react'
import Statement from '../../components/Statement/Statement'

const FinancialStatement = () => {
  return (
    <div className="py-3">
      <div className="py-1">
        <h3 className="text-xl font-bold">Financial Statement</h3>
        <p className="text-sm font-semibold mt-2">
          You need to make sure you sell 2 items ( A, B)from the day you launch
          Teaco in Bangladesh, and 1 items in Nepal. ( A). For each products to
          produce, cost will be: A: 2 BDT, B: 1 BDT. Now, you need to project
          how many items do you need to sell to gain 10% of the market share in
          Bangladesh.
        </p>
      </div>
      {/* card */}
      <Statement />
    </div>
  )
}

export default FinancialStatement
