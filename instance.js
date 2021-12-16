const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'GALAUSDT',
    exchange: 'binance_futures',
    periods: ['5m','15m', '1h'],
    trade: {
      currency_capital: 150,
      strategies: [
        {
          strategy: 'dip_catcher',
          interval: '15m',
          options: {
            period: '15m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 1,
        stop_percent: 1.0
      }
    ]
  },
  {
    symbol: 'MATICUSDT',
    exchange: 'binance_futures',
    periods: ['5m', '15m', '1h'],
    trade: {
      currency_capital: 150,
      strategies: [
        {
          strategy: 'dip_catcher',
          interval: '15m',
          options: {
            period: '15m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 1,
        stop_percent: 1.0
      }
    ]
  },
  {
    symbol: 'SFPUSDT',
    exchange: 'binance_futures',
    periods: ['5m', '15m', '1h'],
    trade: {
      currency_capital: 150,
      strategies: [
        {
          strategy: 'dip_catcher',
          interval: '15m',
          options: {
            period: '15m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 1,
        stop_percent: 1.0
      }
    ]
  },
  {
    symbol: 'IOTXUSDT',
    exchange: 'binance_futures',
    periods: ['1m', '15m', '1h'],
    trade: {
      currency_capital: 150,
      strategies: [
        {
          strategy: 'cci',
          interval: '15m',
          options: {
            period: '15m'
          }
        },{strategy: 'obv_pump_dump'}
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 1,
        stop_percent: 1.0
      }
    ]
  }
];
