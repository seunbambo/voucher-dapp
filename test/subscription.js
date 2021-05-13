const { expectRevert, time } = require('@openzeppelin/test-helpers');
const Subscription = artifacts.require('Subscription');

contract('Subscription', () => {
  let sub;

  before(async () => {
    sub = await Subscription.new();
  });

  it('Should create voucher', async () => {
    await sub.createVoucher(100);
  });

  it('Voucher amount must be greater than 0', async () => {
    await sub.createVoucher(0);
    const voucher = await sub.vouchers(0);
    assert(voucher.amount.toNumber() === 0);
  });
});
