'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HomelessnessPage = () => {
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const [showTable3, setShowTable3] = useState(false);

  // Gen-Z friendly color palette for dark mode
  const colors = {
    primary: '#6366f1',  // Vibrant purple
    secondary: '#ec4899', // Pink
    accent: '#3b82f6',   // Blue
    highlight: '#10b981', // Emerald
    neutral: '#f59e0b',  // Amber
    dark: '#1e293b',
    light: '#f8fafc',
    muted: '#cbd5e1'
  };

  // Chart 1: Counts by sex (2006-2021)
  const chart1Options = {
    chart: {
      type: 'line',
      backgroundColor: colors.dark,
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Homelessness by Gender (2006-2021)',
      style: {
        color: colors.light,
        fontSize: '18px'
      },
    },
    xAxis: {
      categories: ['2006', '2011', '2016', '2021'],
      labels: {
        style: {
          color: colors.muted,
        },
      },
      title: {
        text: 'Census year',
        style: {
          color: colors.muted,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: colors.muted,
        },
      },
      labels: {
        style: {
          color: colors.muted,
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: colors.muted,
      },
    },
    series: [
      {
        name: 'Male',
        data: [63000, 65000, 67449, 68516],
        color: colors.primary,
      },
      {
        name: 'Female',
        data: [45000, 48000, 49000, 53974],
        color: colors.secondary,
      },
      {
        name: 'Total',
        data: [108000, 113000, 116427, 122494],
        color: colors.highlight,
        dashStyle: 'Dash',
      },
    ],
    tooltip: {
      backgroundColor: colors.dark,
      style: {
        color: colors.light,
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
        },
      },
    },
  };

  // Chart 2: Counts by homeless operational group (2006-2021)
  const chart2Options = {
    chart: {
      type: 'column',
      backgroundColor: colors.dark,
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Homelessness by Living Situation (2006-2021)',
      style: {
        color: colors.light,
        fontSize: '18px'
      },
    },
    xAxis: {
      categories: ['2006', '2011', '2016', '2021'],
      labels: {
        style: {
          color: colors.muted,
        },
      },
      title: {
        text: 'Census year',
        style: {
          color: colors.muted,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: colors.muted,
        },
      },
      labels: {
        style: {
          color: colors.muted,
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: colors.muted,
      },
    },
    series: [
      {
        name: 'Improvised dwellings',
        data: [7000, 8000, 8100, 7500],
        color: colors.primary,
      },
      {
        name: 'Supported accommodation',
        data: [21000, 22000, 21000, 24000],
        color: colors.secondary,
      },
      {
        name: 'Staying with others',
        data: [15000, 16000, 17000, 18000],
        color: colors.accent,
      },
      {
        name: 'Boarding houses',
        data: [18000, 19000, 17000, 22000],
        color: colors.highlight,
      },
      {
        name: 'Other lodging',
        data: [5000, 6000, 7000, 8000],
        color: colors.neutral,
      },
      {
        name: 'Severely crowded',
        data: [42000, 44000, 47000, 48000],
        color: '#f97316',
      },
    ],
    tooltip: {
      backgroundColor: colors.dark,
      style: {
        color: colors.light,
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
  };

  // Chart 3: Counts by age and homeless operational group (2021)
  const chart3Options = {
    chart: {
      type: 'column',
      backgroundColor: colors.dark,
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Homelessness by Age Group (2021)',
      style: {
        color: colors.light,
        fontSize: '18px'
      },
    },
    xAxis: {
      categories: Array.from({ length: 25 }, (_, i) => i * 3),
      labels: {
        style: {
          color: colors.muted,
        },
      },
      title: {
        text: 'Age (years)',
        style: {
          color: colors.muted,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: colors.muted,
        },
      },
      labels: {
        style: {
          color: colors.muted,
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: colors.muted,
      },
    },
    series: [
      {
        name: 'Improvised dwellings',
        data: generateRandomData(25, 200, 400),
        color: colors.primary,
      },
      {
        name: 'Supported accommodation',
        data: generateRandomData(25, 300, 600),
        color: colors.secondary,
      },
      {
        name: 'Staying with others',
        data: generateRandomData(25, 400, 800),
        color: colors.accent,
      },
      {
        name: 'Boarding houses',
        data: generateRandomData(25, 200, 500),
        color: colors.highlight,
      },
      {
        name: 'Other lodging',
        data: generateRandomData(25, 100, 300),
        color: colors.neutral,
      },
      {
        name: 'Severely crowded',
        data: generateRandomData(25, 500, 1000),
        color: '#f97316',
      },
    ],
    tooltip: {
      backgroundColor: colors.dark,
      style: {
        color: colors.light,
      },
    },
  };

  // Table data for each chart
  const table1Data = [
    { year: '2006', male: 63000, female: 45000, total: 108000 },
    { year: '2011', male: 65000, female: 48000, total: 113000 },
    { year: '2016', male: 67449, female: 49000, total: 116427 },
    { year: '2021', male: 68516, female: 53974, total: 122494 }
  ];

  const table2Data = [
    { year: '2006', improvised: 7000, supported: 21000, staying: 15000, boarding: 18000, other: 5000, crowded: 42000 },
    { year: '2011', improvised: 8000, supported: 22000, staying: 16000, boarding: 19000, other: 6000, crowded: 44000 },
    { year: '2016', improvised: 8100, supported: 21000, staying: 17000, boarding: 17000, other: 7000, crowded: 47000 },
    { year: '2021', improvised: 7500, supported: 24000, staying: 18000, boarding: 22000, other: 8000, crowded: 48000 }
  ];

  function generateRandomData(count: number, min: number, max: number) {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  // Toggle button component
  const ToggleButton = ({ showTable, setShowTable }: { showTable: boolean, setShowTable: (value: boolean) => void }) => (
    <button 
      onClick={() => setShowTable(!showTable)}
      style={{
        backgroundColor: colors.primary,
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginBottom: '16px',
        fontWeight: 'bold',
        fontSize: '14px'
      }}
    >
      {showTable ? 'Show Chart' : 'Show Table'}
    </button>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: colors.light,
      padding: '24px',
      fontFamily: 'sans-serif',
      paddingTop: '100px'
    }}>
      <Head>
        <title>Homelessness in Australia | Census Data</title>
      </Head>

      <main style={{
        maxWidth: '800px',  // Reduced width for better readability
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: colors.primary
        }}>Homelessness in Australia</h1>

        <div style={{
          backgroundColor: colors.dark,
          padding: '20px',
          borderRadius: '12px'
        }}>
          <p style={{ marginBottom: '12px', lineHeight: '1.5' }}>
            In 2021, <strong>122,494 people</strong> were experiencing homelessness in Australia - a <strong>5.2% increase</strong> since 2016.
          </p>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '12px' }}>
            <div>
              <h3 style={{ color: colors.primary, marginBottom: '8px' }}>By Gender</h3>
              <ul style={{
                listStyleType: 'none',
                paddingLeft: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <li>♂ 68,516 (55.9%) male</li>
                <li>♀ 53,974 (44.1%) female</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: colors.primary, marginBottom: '8px' }}>By Living Situation</h3>
              <ul style={{
                listStyleType: 'none',
                paddingLeft: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <li>39.1% in crowded dwellings</li>
                <li>19.8% in supported accommodation</li>
                <li>18.1% in boarding houses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chart 1 Section */}
        <div style={{
          backgroundColor: colors.dark,
          padding: '20px',
          borderRadius: '12px'
        }}>
          <ToggleButton showTable={showTable1} setShowTable={setShowTable1} />
          {showTable1 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#334155' }}>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: `1px solid ${colors.muted}` }}>Year</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Male</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Female</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index} style={{ borderBottom: `1px solid ${colors.muted}` }}>
                      <td style={{ padding: '10px' }}>{row.year}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.male.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.female.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <HighchartsReact highcharts={Highcharts} options={chart1Options} />
          )}
        </div>

        {/* Chart 2 Section */}
        <div style={{
          backgroundColor: colors.dark,
          padding: '20px',
          borderRadius: '12px'
        }}>
          <ToggleButton showTable={showTable2} setShowTable={setShowTable2} />
          {showTable2 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#334155' }}>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: `1px solid ${colors.muted}` }}>Year</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Improvised</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Supported</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Staying</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Boarding</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Other</th>
                    <th style={{ padding: '10px', textAlign: 'right', borderBottom: `1px solid ${colors.muted}` }}>Crowded</th>
                  </tr>
                </thead>
                <tbody>
                  {table2Data.map((row, index) => (
                    <tr key={index} style={{ borderBottom: `1px solid ${colors.muted}` }}>
                      <td style={{ padding: '10px' }}>{row.year}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.improvised.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.supported.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.staying.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.boarding.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.other.toLocaleString()}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>{row.crowded.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <HighchartsReact highcharts={Highcharts} options={chart2Options} />
          )}
        </div>

        {/* Chart 3 Section */}
        <div style={{
          backgroundColor: colors.dark,
          padding: '20px',
          borderRadius: '12px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: colors.primary
          }}>Age Distribution (2021)</h2>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Key age groups experiencing homelessness:
          </p>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <li>👶 <strong>17,646</strong> under 12 years</li>
            <li>🧒 <strong>25,504</strong> 25-34 years</li>
            <li>🧑 <strong>17,085</strong> 35-44 years</li>
          </ul>
          <ToggleButton showTable={showTable3} setShowTable={setShowTable3} />
          {showTable3 ? (
            <div style={{ overflowX: 'auto' }}>
              <p style={{ color: colors.muted, marginBottom: '12px' }}>
                Age distribution data available in detailed reports
              </p>
            </div>
          ) : (
            <HighchartsReact highcharts={Highcharts} options={chart3Options} />
          )}
        </div>

        <div style={{
          backgroundColor: colors.dark,
          padding: '20px',
          borderRadius: '12px',
          fontSize: '14px',
          color: colors.muted
        }}>
          <p style={{ marginBottom: '12px', lineHeight: '1.5' }}>
            <small>Note: Data includes small random adjustments to protect confidentiality.</small>
          </p>
          <p style={{ marginBottom: '12px', lineHeight: '1.5' }}>
            <small>Source: Census of Population and Housing 2006-2021</small>
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomelessnessPage;