export const source=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lease & Rental Info</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f7f9;">
    <div style="max-width: 1024px; margin: 0 auto; border: 1px solid #E0E0E0; border-radius: 8px; overflow: hidden; background-color: white;">
        <!-- Navigation Tabs -->
      <div style="padding: 20px 0 0 0;">
        <span style="font-size: 16px;padding: 20px; font-weight: bold; color: #333333; ">Lease and Rental Info</span>
    </div>
        <!-- Information Grid -->
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">

          
            <!-- Row 1 -->
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Commencement Date</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">June 2024</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Lease Term</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">60 months (5 years)</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Lease Expiration</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">June 2029</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Monthly Rent</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">$98,400.00</div>
            </div>
            
            <!-- Row 2 -->
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Rent Per Acre</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">$10,250.00</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Annual Rent Escalation</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">3.50%</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Comparable Rental Rates</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">$95,000 - $105,000/month</div>
            </div>
            
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Average Lease Length in Area</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">3-7 years</div>
            </div>
            
            <!-- Row 3 (only one cell) -->
            <div style="border: 1px solid #E0E0E0; border-radius: 5px; padding: 15px; background-color: white;">
                <div style="font-size: 12px; color: #777777; margin-bottom: 5px;">Vacancy Rate in the Area</div>
                <div style="font-size: 14px; color: #333333; font-weight: 500;">7.2%</div>
            </div>
        </div>
        
        <!-- Table Section -->
        <div style="padding: 20px; margin-top: 5px;">
            <table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <thead>
                    <tr style="background-color: #f0f8ff;">
                        <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #E0E0E0; font-size: 14px; color: #333333; font-weight: 600;">Year</th>
                        <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #E0E0E0; font-size: 14px; color: #333333; font-weight: 600;">Lease Rate ($/SF)</th>
                        <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #E0E0E0; font-size: 14px; color: #333333; font-weight: 600;">Rental Rate ($/SF)</th>
                        <th style="padding: 12px 15px; text-align: left; border-bottom: 1px solid #E0E0E0; font-size: 14px; color: #333333; font-weight: 600;">Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #E0E0E0;">
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2025</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #999999;">—</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #999999;">—</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #999999;">—</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #E0E0E0;">
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2026</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            10.18 <span style="color: #22c55e; font-size: 13px;">↑ 3.46</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            33.28 <span style="color: #22c55e; font-size: 13px;">↑ 4.00</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">9M</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #E0E0E0;">
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2027</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            10.54 <span style="color: #22c55e; font-size: 13px;">↑ 3.54</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            34.61 <span style="color: #22c55e; font-size: 13px;">↑ 4.00</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">10.8M</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #E0E0E0;">
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2028</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            10.91 <span style="color: #22c55e; font-size: 13px;">↑ 3.51</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            35.99 <span style="color: #22c55e; font-size: 13px;">↑ 3.99</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">11.2M</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #E0E0E0;">
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2029</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            11.29 <span style="color: #22c55e; font-size: 13px;">↑ 3.48</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            37.43 <span style="color: #22c55e; font-size: 13px;">↑ 4.00</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">12M</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">2030</td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            10.91 <span style="color: #ef4444; font-size: 13px;">↓ 3.48</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">
                            35.99 <span style="color: #ef4444; font-size: 13px;">↓ 4.00</span>
                        </td>
                        <td style="padding: 12px 15px; font-size: 14px; color: #333333;">11M</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>`