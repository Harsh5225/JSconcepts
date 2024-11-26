## Why Primitive Data Types Are Considered Immutable?

### Explanation:
Primitive data types in programming are often called **immutable**, even though we can "change" their values. Let’s understand why:

1. **Example:**
    ```javascript
    let c = 10;
    c = 50;
    ```
    - Initially, `c` is assigned the value `10` in a specific memory location.
    - When we update `c` to `50`, the original memory location is **left unchanged**, and a **new memory location** is allocated to store the value `50`.

2. **Reason:**
    - When we assign `c = 10`, a specific amount of memory (e.g., 8 bits) is allocated to store the value.
    - If we later update `c` with a larger value (e.g., a string or a larger number), it might not fit into the originally allocated memory.
    - To handle this, the variable `c` points to a **new memory location**, leaving the original memory untouched.
    - This behavior makes primitive types **immutable**.

### Primitive Types vs. Non-Primitive Types
- **Primitive Types**:
    - Stored in the **stack**.
    - Passed by **value**.
    - Immutable (new memory is allocated for changes).

- **Non-Primitive Types**:
    - Stored in the **heap**.
    - Passed by **reference**.
    - Mutable (directly modified in the same memory location).

### Word Size:
- The **word size** determines how many bytes are grouped together to form a single memory address.
    - Example: If the word size is `2` bytes and the memory is `8 bytes`, each memory address will point to `4 collated bytes`.



