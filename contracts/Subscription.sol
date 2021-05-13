pragma solidity ^0.5.2;

contract Subscription {
  struct Voucher {
    uint id;
    string voucherGeneratedId;
    uint amount;
    uint created;
  }

  event VoucherCreated(
        uint256 indexed voucherId,
        string indexed voucherGeneratedId,
        uint256 amount,
        uint256 indexed created
    );

  mapping(uint => Voucher) public vouchers;

  uint public voucherId;

  function createVoucher(uint256 amount, string memory voucherGeneratedId) public {
    require(amount > 0, 'Amount must be greater than 0');
    vouchers[voucherId] = Voucher(
      voucherId,
      voucherGeneratedId,
      amount,
      now 
    );
    voucherId++;
    emit VoucherCreated(voucherId, voucherGeneratedId, amount, now);
  }

  function getVouchers(uint256 id) public view returns (uint256, string memory, uint256, uint256) {
    return (vouchers[id].id, vouchers[id].voucherGeneratedId, vouchers[id].amount, vouchers[id].created);
  }
}
