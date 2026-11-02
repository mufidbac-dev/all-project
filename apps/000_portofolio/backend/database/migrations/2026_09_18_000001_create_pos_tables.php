<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pos_stores', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('code', 40)->unique();
            $table->string('name', 160);
            $table->text('address')->nullable();
            $table->string('timezone', 64);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('pos_products', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('sku', 80)->unique();
            $table->string('barcode', 80)->nullable()->unique();
            $table->string('name', 160);
            $table->string('unit', 30);
            $table->decimal('price', 12, 2);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('pos_store_product_inventory', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('store_id')->constrained('pos_stores')->cascadeOnDelete();
            $table->foreignUuid('product_id')->constrained('pos_products')->cascadeOnDelete();
            $table->decimal('quantity', 12, 3)->default(0);
            $table->decimal('reorder_level', 12, 3)->default(0);
            $table->timestamps();
            $table->unique(['store_id', 'product_id']);
        });

        Schema::create('pos_sales', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->string('sale_number', 40)->unique();
            $table->foreignUuid('store_id')->constrained('pos_stores');
            $table->foreignId('cashier_id')->constrained('users');
            $table->enum('status', ['paid', 'void', 'refunded'])->default('paid');
            $table->char('currency', 3)->default('IDR');
            $table->decimal('subtotal', 12, 2);
            $table->decimal('discount_amount', 12, 2)->default(0);
            $table->decimal('tax_amount', 12, 2)->default(0);
            $table->decimal('total_amount', 12, 2);
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('voided_at')->nullable();
            $table->foreignId('voided_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->index(['store_id', 'created_at']);
            $table->index(['cashier_id', 'created_at']);
        });

        Schema::create('pos_sale_items', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('sale_id')->constrained('pos_sales')->cascadeOnDelete();
            $table->foreignUuid('product_id')->constrained('pos_products');
            $table->string('product_name', 160);
            $table->string('sku', 80);
            $table->decimal('quantity', 12, 3);
            $table->decimal('unit_price', 12, 2);
            $table->decimal('discount_amount', 12, 2)->default(0);
            $table->decimal('tax_amount', 12, 2)->default(0);
            $table->decimal('line_total', 12, 2);
            $table->timestamps();
        });

        Schema::create('pos_payments', function (Blueprint $table): void {
            $table->uuid('id')->primary();
            $table->foreignUuid('sale_id')->constrained('pos_sales')->cascadeOnDelete();
            $table->string('method', 30);
            $table->char('currency', 3)->default('IDR');
            $table->decimal('amount', 12, 2);
            $table->string('reference', 120)->nullable();
            $table->enum('status', ['captured', 'voided', 'refunded'])->default('captured');
            $table->timestamp('paid_at');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pos_payments');
        Schema::dropIfExists('pos_sale_items');
        Schema::dropIfExists('pos_sales');
        Schema::dropIfExists('pos_store_product_inventory');
        Schema::dropIfExists('pos_products');
        Schema::dropIfExists('pos_stores');
    }
};
