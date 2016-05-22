#include <iostream>
#include <math.h>
using namespace std;
double totalPrice = 0;
double totalDiscount = 0;

class Receipt
{
public:
	Receipt() {}
	Receipt(char* itemName, int quantity, double price, int type) : itemQuantity(quantity), itemPrice(price), type(type)
	{
		strcpy_s(this->itemName, 64, itemName);
	}
	void makeReceipt(const int index);
private:
	char itemName[64];
	int itemQuantity;
	double itemPrice;
	int type;
};

void Receipt::makeReceipt(const int index)
{
	double discount(0);
	cout << index << "). - " << this->itemName << " - " << this->itemQuantity << " - " << this->itemPrice << "Rs" << endl;
	if (this->type == 1)
	{
		discount += this->itemPrice * 0.1;
		cout << "Discount 10% - " << discount << endl;
	}
	else if (this->type == 2)
	{
		discount += this->itemPrice * 0.2;
		cout << "Discount 20% - " << discount << endl;
	}
	cout << "--------------------------------------------" << endl;
	totalPrice += this->itemQuantity * (this->itemPrice - discount);
	totalDiscount += this->itemQuantity * discount;
	cout << "Total: Rs " << totalPrice << "/-" << endl;
	cout << "Total Discount: Rs " << totalDiscount << "/-" << endl;
}

int main()
{
	char name[30];
	int quantity;
	double price;
	int number;
	cout << "How many items you have: ";
	cin >> number;
	Receipt myArray[100];
	int i = 0;
	int type(0);
	for (i = 0; i < number; ++i)
	{
		cout << "Enter Name of Item: ";
		cin >> name;
		char response;
		cout << "Is it cloth? Y:N  :";
		cin >> response;
		if (tolower(response) == 'y')
		{
			type = 1;
		}
		else
		{
			cout << "Is it a stationary? Y:N  :";
			cin >> response;
			if (tolower(response) == 'y')
			{
				type = 2;
			}
		}
		cout << "Quantity: ";
		cin >> quantity;
		cout << "Price: ";
		cin >> price;
		myArray[i] = Receipt(name, quantity, price, type);
	}
	for (int j = 0; j < i; ++j)
	{
		myArray[j].makeReceipt(j+1);
	}
	
	return 0;
}
