-- 1
-- CREATE USER
CREATE USER 'rizkitriananda'@'%' IDENTIFIED BY '25SA11A159';


-- 2
-- SELECT PRODUK DAN PEJUALAN
-- UPDATE (STOK) PRODUK
-- INSERT PENJUALAN DAN PEMBELIAN

-- a.
GRANT SELECT ON ampu_mart.tbProduk TO 'rizkitriananda'@'%';
GRANT SELECT ON ampu_mart.tbPenjualan TO 'rizkitriananda'@'%';

-- b.
GRANT UPDATE (stok) ON ampu_mart.tbProduk TO 'rizkitriananda'@'%';

-- c.
GRANT INSERT ON ampu_mart.tbPenjualan TO 'rizkitriananda'@'%';
GRANT INSERT ON ampu_mart.tbPembelian TO 'rizkitriananda'@'%';


-- 3 
-- CREATE USER SUPERVISOR (ALL PRIVILEGES)
CREATE USER 'supervisor'@'%' IDENTIFIED BY 'supervisor123';
GRANT ALL PRIVILEGES ON ampu_mart.* TO 'supervisor'@'%';


-- 4
-- SHOW DATA PRODUK TERMAHAL DAN TERMURAH
SELECT * FROM tbProduk WHERE harga = (SELECT MAX(harga) FROM tbProduk)
OR harga = (SELECT MIN(harga) FROM tbproduk) ORDER BY harga DESC;


-- 5
--  RATA-RATA PRODUK PER KATEGORI
SELECT idkategori, AVG(harga) AS harga_rerata FROM tbProduk GROUP BY idkategori;


-- 6
-- SHOW TOTAL NILAI PEMBELIAN PER PEMASOK (DESC)
SELECT idpemasok, SUM(totalbeli) AS total_pembelian FROM tbpembelian
GROUP BY idpemasok ORDER BY total_pembelian DESC;


-- 7
-- SHOW TOTAL PENJUALAN PER TANGGAL TRANSAKSI
SELECT tgljual, SUM(totaljual) AS total_penjualan FROM tbpenjualan
GROUP BY tgljual ORDER BY tgljual;


-- 8
-- SHOW JUMLAH TRANSAKSI PER PELANGGAN
SELECT idpelanggan, COUNT(notajual) AS jumlah_transaksi
FROM tbpenjualan GROUP BY idpelanggan;


-- 9
-- SHOW TOTAL PEMBELIAN PER PEMASOK
SELECT idpemasok, SUM(totalbeli) FROM tbpembelian GROUP BY idpemasok;



-- 10
-- SHOW ID PRODUK TERJUAL LEBIH DARI 5
SELECT idproduk, SUM(jumlah) AS total_jual FROM tbdetailjual
GROUP BY idproduk HAVING SUM(jumlah) > 5;

