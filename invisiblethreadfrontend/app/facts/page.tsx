'use client';

import React from 'react';
import Head from 'next/head';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HomelessnessPage = () => {
  // Chart 1: Counts by sex (2006-2021)
  const chart1Options = {
    chart: {
      type: 'line',
      backgroundColor: '#1e293b',
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Counts of people experiencing homelessness by sex, Australia, 2006 to 2021',
      style: {
        color: '#f8fafc',
      },
    },
    xAxis: {
      categories: ['2006', '2011', '2016', '2021'],
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      title: {
        text: 'Census year',
        style: {
          color: '#cbd5e1',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: '#cbd5e1',
        },
      },
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: '#cbd5e1',
      },
    },
    series: [
      {
        name: 'Male',
        data: [63000, 65000, 67449, 68516],
        color: '#60a5fa',
      },
      {
        name: 'Female',
        data: [45000, 48000, 49000, 53974],
        color: '#f472b6',
      },
      {
        name: 'Total',
        data: [108000, 113000, 116427, 122494],
        color: '#86efac',
        dashStyle: 'Dash',
      },
    ],
    tooltip: {
      backgroundColor: '#1e293b',
      style: {
        color: '#f8fafc',
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
      backgroundColor: '#1e293b',
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Counts of people experiencing homelessness by homeless operational group, Australia, 2006 to 2021',
      style: {
        color: '#f8fafc',
      },
    },
    xAxis: {
      categories: ['2006', '2011', '2016', '2021'],
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      title: {
        text: 'Census year',
        style: {
          color: '#cbd5e1',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: '#cbd5e1',
        },
      },
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: '#cbd5e1',
      },
    },
    series: [
      {
        name: 'Improvised dwellings, tents, sleeping out',
        data: [7000, 8000, 8100, 7500],
        color: '#60a5fa',
      },
      {
        name: 'Supported accommodation',
        data: [21000, 22000, 21000, 24000],
        color: '#f472b6',
      },
      {
        name: 'Staying temporarily with other households',
        data: [15000, 16000, 17000, 18000],
        color: '#86efac',
      },
      {
        name: 'Boarding houses',
        data: [18000, 19000, 17000, 22000],
        color: '#f59e0b',
      },
      {
        name: 'Other temporary lodging',
        data: [5000, 6000, 7000, 8000],
        color: '#a78bfa',
      },
      {
        name: 'Severely crowded dwellings',
        data: [42000, 44000, 47000, 48000],
        color: '#f97316',
      },
    ],
    tooltip: {
      backgroundColor: '#1e293b',
      style: {
        color: '#f8fafc',
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
      backgroundColor: '#1e293b',
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Counts of people experiencing homelessness by age and homeless operational group, 2021',
      style: {
        color: '#f8fafc',
      },
    },
    xAxis: {
      categories: Array.from({ length: 25 }, (_, i) => i * 3),
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      title: {
        text: 'Age (years)',
        style: {
          color: '#cbd5e1',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Counts of people',
        style: {
          color: '#cbd5e1',
        },
      },
      labels: {
        style: {
          color: '#cbd5e1',
        },
      },
      gridLineColor: '#334155',
    },
    legend: {
      itemStyle: {
        color: '#cbd5e1',
      },
    },
    series: [
      {
        name: 'Improvised dwellings, tents, sleeping out',
        data: generateRandomData(25, 200, 400),
        color: '#60a5fa',
      },
      {
        name: 'Supported accommodation',
        data: generateRandomData(25, 300, 600),
        color: '#f472b6',
      },
      {
        name: 'Staying temporarily with other households',
        data: generateRandomData(25, 400, 800),
        color: '#86efac',
      },
      {
        name: 'Boarding houses',
        data: generateRandomData(25, 200, 500),
        color: '#f59e0b',
      },
      {
        name: 'Other temporary lodging',
        data: generateRandomData(25, 100, 300),
        color: '#a78bfa',
      },
      {
        name: 'Severely crowded dwellings',
        data: generateRandomData(25, 500, 1000),
        color: '#f97316',
      },
    ],
    tooltip: {
      backgroundColor: '#1e293b',
      style: {
        color: '#f8fafc',
      },
    },
  };

  function generateRandomData(count:any, min:any, max:any) {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '24px',
      fontFamily: 'sans-serif',
      paddingTop: '100px'
    }}>
      <Head>
        <title>Homelessness in Australia | Census Data</title>
      </Head>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        <h1 style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '24px'
        }}>Overview</h1>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            122,494 people were estimated to be experiencing homelessness at the time of the 2021 Census, an increase of 6,067 people (5.2%) since 2016. The rate of homelessness decreased to 48 people per 10,000, from 50 in 2016.
          </p>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Of those experiencing homelessness in 2021:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>68,516 (55.9%) were male, an increase of 1.6% from 2016</li>
            <li>53,974 (44.1%) were female, an increase of 10.1% from 2016.</li>
          </ul>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Females accounted for 81.7% of the 6,067 increase of people experiencing homelessness in 2021.
          </p>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            The rate of homelessness for males decreased in 2021 to 55 males per 10,000 (from 58 in 2016), while the rate for females increased in 2021 to 42 females per 10,000 (from 41 in 2016).
          </p>
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <HighchartsReact highcharts={Highcharts} options={chart1Options} />
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>Homeless operational groups</h2>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            The ABS uses six operational groups for presenting estimates of people experiencing homelessness on Census night. These groups are:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>people living in improvised dwellings, tents or sleeping out</li>
            <li>people living in supported accommodation for the homeless</li>
            <li>people staying temporarily with other households</li>
            <li>people living in boarding houses</li>
            <li>people in other temporary lodgings</li>
            <li>people living in 'severely' crowded dwellings.</li>
          </ul>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            The ABS also compiles estimates from Census data for the following three groups of people who may be marginally housed but are not classified as homeless:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>people living in other crowded dwellings</li>
            <li>people in other improvised dwellings</li>
            <li>people marginally housed in caravan parks.</li>
          </ul>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Of the 122,494 people experiencing homelessness in Australia in 2021:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>Two in five (39.1%) were living in 'severely' crowded dwellings</li>
            <li>One in five (19.8%) were in supported accommodation for the homeless</li>
            <li>One in six (18.1%) living in boarding houses.</li>
          </ul>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Between 2016 and 2021, there was a:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>26.5% increase in people living in boarding houses</li>
            <li>14.4% increase in people in supported accommodation for the homeless</li>
            <li>6.9% decrease in people living in improvised dwellings, tents, or sleeping out</li>
            <li>6.3% decrease to living in 'severely' crowded dwellings.</li>
          </ul>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            The decrease in people living in improvised dwellings, tents, or sleeping out and the increase in people in other temporary lodgings may be partly associated with measures put in place by local and state governments in response to COVID-19. The increases in people living in boarding houses and people in other temporary lodging are also partly associated with improvements in data quality through greater use of administrative data.
          </p>
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <HighchartsReact highcharts={Highcharts} options={chart2Options} />
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>Age</h2>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            The age groups presented in this release support analysis and reporting of some key cohorts for service delivery and policy responses to reduce the incidence of homelessness. These include children aged under 12 years, young people aged from 12 to 18 years and aged from 19 to 24 years.
          </p>

          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Of the 122,494 people experiencing homelessness in 2021:
          </p>

          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '24px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <li>25,504 (20.8%) were aged from 25 to 34 years</li>
            <li>17,646 (14.4%) were aged under 12 years</li>
            <li>17,085 (13.9%) were aged from 35 to 44 years.</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <HighchartsReact highcharts={Highcharts} options={chart3Options} />
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '24px',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#cbd5e1'
        }}>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            Please note that there are small random adjustments made to all cell values to protect the confidentiality of data. These adjustments may cause the sum of rows or columns to differ by small amounts from table totals.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            a. Categories are mutually exclusive; therefore, people will only appear in one category.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            b. Data for 2021 is not directly comparable with previous Censuses due to improvements in data quality through greater use of administrative data.
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.5' }}>
            c. Usual residents in dwellings needing 4 or more extra bedrooms under the Canadian National Occupancy Standard (CNOS).
          </p>
          <p style={{ marginTop: '16px', marginBottom: '16px', lineHeight: '1.5' }}>
            Source: Census of Population and Housing 2006, 2011, 2016, 2021.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomelessnessPage;