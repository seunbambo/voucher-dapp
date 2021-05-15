const Subscription = artifacts.require('Subscription');

module.exports = async function (deployer, _network) {
  await deployer.deploy(Subscription);
  await Subscription.deployed();

  // await sub.createVoucher(100, '4000');
};
